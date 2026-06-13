import Link from 'next/link';
import { CITIES } from '../../lib/siteConfig';

const SERVICE_LINKS = [
  { href: '/services/residential', label: 'Residential solar' },
  { href: '/services/commercial', label: 'Commercial solar' },
  { href: '/subsidy', label: 'PM Surya Ghar subsidy' },
  { href: '/contact', label: 'Free solar quote' },
] as const;

export function BlogRelatedLinks() {
  return (
    <nav className="blog-related" aria-label="Related pages">
      <h2 className="blog-related__title">Explore ELRIX ENERGY</h2>
      <div className="blog-related__groups">
        <div>
          <p className="blog-related__label">Solar by city</p>
          <ul className="blog-related__list">
            {CITIES.map((city) => (
              <li key={city.slug}>
                <Link href={city.path}>Solar company in {city.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="blog-related__label">Services &amp; support</p>
          <ul className="blog-related__list">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
