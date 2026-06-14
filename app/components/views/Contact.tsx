"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import Reveal from '../common/Reveal';
import LazyGoogleMap from '../common/LazyGoogleMap';
import { trackFormSubmit } from '@/app/lib/analytics';
import { isValidIndianMobile, normalizeIndianMobile, submitInquiryToFormSubmit } from '@/app/lib/contactForm';
import { getRecaptchaToken, isRecaptchaEnabled, loadRecaptchaScript } from '@/app/lib/recaptchaClient';
import { CONTACT } from '@/app/lib/siteConfig';
import styles from './Contact.module.css';

type SubmitStatus = 'success' | 'error' | null;

const ContactForm = () => {
  const searchParams = useSearchParams();
  const prefillBill = searchParams.get("bill") ?? "";
  const systemSize = searchParams.get("systemSize") ?? "";
  const lifetimeSavings = searchParams.get("lifetimeSavings") ?? "";
  const leadSource = searchParams.get("lead_source") ?? "";

  const prefillRequirement =
    leadSource === "calculator" && systemSize
      ? [
          "Calculator estimate:",
          prefillBill ? `- Monthly bill: ₹${prefillBill}` : null,
          `- Recommended system: ${systemSize} kW`,
          lifetimeSavings ? `- Est. 25-year savings: ₹${Number(lifetimeSavings).toLocaleString("en-IN")}` : null,
          "",
          "Please share a detailed quote.",
        ]
          .filter(Boolean)
          .join("\n")
      : "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (isRecaptchaEnabled()) {
      loadRecaptchaScript().catch(() => {
        // Script load failure handled on submit.
      });
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get("_honey") ?? "");
    if (honeypot) {
      setSubmitStatus("success");
      setIsSubmitting(false);
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const phone = normalizeIndianMobile(String(formData.get("phone") ?? ""));
    const location = String(formData.get("location") ?? "").trim();
    const requirement = String(formData.get("requirement") ?? "").trim();

    if (!name || !phone || !requirement || !location) {
      setSubmitError("Please fill in all required fields.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    if (!isValidIndianMobile(phone)) {
      setSubmitError("Enter a valid 10-digit mobile number (e.g. 9640484677, without +91).");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    let recaptchaToken: string | null = null;
    if (isRecaptchaEnabled()) {
      try {
        recaptchaToken = await getRecaptchaToken("contact");
      } catch {
        setSubmitError(
          "Security check failed to load. Disable ad blockers, refresh the page, and try again.",
        );
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }
    }

    const monthlyBill = String(formData.get("monthlyBill") ?? "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          recaptchaToken,
          honey: honeypot,
          name,
          phone,
          location,
          requirement,
          monthlyBill,
          leadSource,
          systemSize,
          lifetimeSavings,
        }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error || "Submission failed");
      }

      const delivery = await submitInquiryToFormSubmit({
        name,
        phone,
        location,
        requirement,
        monthlyBill,
        leadSource,
        systemSize,
        lifetimeSavings,
      });

      if (!delivery.ok) {
        throw new Error(delivery.error);
      }

      setSubmitStatus("success");
      trackFormSubmit("contact", true);
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error && error.message !== "Submission failed"
          ? error.message
          : "Something went wrong. Please try again or call us directly.";
      setSubmitError(message);
      setSubmitStatus("error");
      trackFormSubmit("contact", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ready to go solar? Get in touch for a free site survey and quote.</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <div className={styles.contactGrid}>
              <div>
                <h2>Get in Touch</h2>
                <p className="mb-3">
                  We guarantee prioritized site surveys and respond to all
                  complex commercial and residential inquiries within 24 hours.
                </p>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper} aria-hidden="true"><MapPin size={24} /></div>
                  <div>
                    <h3>Head Office</h3>
                    <p>{CONTACT.address}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper} aria-hidden="true"><Phone size={24} /></div>
                  <div>
                    <h3>Phone Number</h3>
                    <p>
                      <a href={`tel:${CONTACT.phone}`} data-analytics-location="contact_page">
                        {CONTACT.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper} aria-hidden="true"><Mail size={24} /></div>
                  <div>
                    <h3>Email Address</h3>
                    <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
                  </div>
                </div>
              </div>

              <div className={`${styles.contactFormContainer} glass`}>
                <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
                  {/* Honeypot — bots fill this; humans don't */}
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" autoComplete="off" />
                  {leadSource && <input type="hidden" name="leadSource" value={leadSource} />}
                  {systemSize && <input type="hidden" name="systemSize" value={systemSize} />}
                  {lifetimeSavings && <input type="hidden" name="lifetimeSavings" value={lifetimeSavings} />}

                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your full name" autoComplete="name" />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="9640484677"
                      autoComplete="tel"
                      inputMode="numeric"
                      pattern="[0-9+\s]{10,14}"
                      title="Enter a 10-digit Indian mobile number, with or without +91"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="monthlyBill">Average Monthly Electricity Bill (₹)</label>
                    <input
                      type="number"
                      id="monthlyBill"
                      name="monthlyBill"
                      placeholder="e.g. 5000"
                      min="0"
                      defaultValue={prefillBill}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="location">Required Location</label>
                    <select id="location" name="location" required defaultValue="">
                      <option value="" disabled>Select a city</option>
                      <option value="Nellore">Nellore</option>
                      <option value="Tirupati">Tirupati</option>
                      <option value="Kadapa">Kadapa</option>
                      <option value="Ongole">Ongole</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="requirement">
                      Your Requirement (e.g., 3kW Residential, 50kW Commercial)
                    </label>
                    <textarea
                      id="requirement"
                      name="requirement"
                      rows={4}
                      required
                      placeholder="Describe your energy needs..."
                      defaultValue={prefillRequirement}
                    />
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.w100}`} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Send Inquiry'}
                  </button>

                  {isRecaptchaEnabled() ? (
                    <p className={styles.recaptchaNotice}>
                      This site is protected by reCAPTCHA and the Google{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                        Terms of Service
                      </a>{' '}
                      apply.
                    </p>
                  ) : null}

                  <div role="status" aria-live="polite" aria-atomic="true">
                    {submitStatus === 'success' && (
                      <p className={`${styles.formMessage} ${styles.formMessageSuccess}`}>
                        Thank you. Your inquiry has been sent successfully. Our team will get back to you within 24 hours.
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className={`${styles.formMessage} ${styles.formMessageError}`}>
                        {submitError ?? 'Something went wrong. Please try again.'}{' '}
                        Call us at{' '}
                        <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection} aria-label="Office location map">
        <h2 className="sr-only">Find Us</h2>
        <a
          className={styles.mapOpenButton}
          href={CONTACT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ELRIX Energy location in Google Maps"
        >
          <span>Open in Maps</span>
          <ExternalLink size={16} aria-hidden="true" />
        </a>
        <LazyGoogleMap />
      </section>
    </div>
  );
};

const Contact = () => (
  <Suspense fallback={<div className={styles.contactPageSkeleton} aria-hidden="true" />}>
    <ContactForm />
  </Suspense>
);

export default Contact;
