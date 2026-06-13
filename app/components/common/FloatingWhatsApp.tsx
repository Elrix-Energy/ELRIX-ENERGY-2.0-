import Image from "next/image";
import { WHATSAPP } from "@/app/lib/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP.url(WHATSAPP.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      data-analytics-location="floating_whatsapp"
    >
      <Image src="/whatsapp.svg" alt="" width={32} height={32} aria-hidden="true" />      <span className="tooltip">Chat with us</span>
    </a>
  );
}
