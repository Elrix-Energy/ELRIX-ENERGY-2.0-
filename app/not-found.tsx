import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Sun, Home, Phone } from 'lucide-react';
import { CONTACT } from './lib/siteConfig';

export const metadata: Metadata = {
  title: { absolute: '404 — Page Not Found | ELRIX ENERGY' },
  description: 'The page you are looking for does not exist. Head back to ELRIX ENERGY.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-8)',
        gap: 'var(--space-4)',
        color: 'var(--ink-1)',
      }}
    >
      <Sun
        size={64}
        style={{ color: 'var(--accent)', marginBottom: 'var(--space-2)' }}
        aria-hidden="true"
      />
      <p style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1, color: 'var(--primary)', margin: 0 }}>
        404
      </p>
      <h1 style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 2.25rem)', margin: 0 }}>
        Page Not Found
      </h1>
      <p style={{ maxWidth: '40ch', color: 'var(--ink-3)', lineHeight: 1.6 }}>
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
        been moved or the URL may be incorrect.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          className="btn btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
        >
          <Home size={16} aria-hidden="true" />
          Back to Home
        </Link>
        <a
          href={`tel:${CONTACT.phone}`}
          className="btn btn-ghost"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
        >
          <Phone size={16} aria-hidden="true" />
          Call Us
        </a>
      </div>
    </main>
  );
}
