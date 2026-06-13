import type { Metadata } from 'next';
import { BRAND, CONTACT, SITE_URL } from './siteConfig';

/** Appended to every document title via root `title.template`. */
export const PAGE_TITLE_TEMPLATE = `%s | ${BRAND.name}`;

/** Default OG image shared across routes without a dedicated OG asset. */
export const DEFAULT_OG_IMAGE = {
  url: BRAND.ogImagePath,
  width: 1200,
  height: 630,
  alt: `${BRAND.name} – Premium Solar Solutions in Andhra Pradesh`,
};

/** Base metadata merged into every route via Next.js metadata inheritance. */
export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND.name,
  authors: [{ name: BRAND.legalName }],
  creator: BRAND.legalName,
  publisher: BRAND.legalName,
  openGraph: {
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website',
  },
};

export const buildCanonical = (path: string): string =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export function buildAlternates(path: string): NonNullable<Metadata['alternates']> {
  const canonical = buildCanonical(path);
  return {
    canonical,
    languages: {
      'en-IN': canonical,
    },
  };
}

/** Trim meta descriptions to ~160 characters without breaking mid-word when possible. */
export function trimDescription(text: string, maxLength = 160): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= maxLength) return normalized;
  const cut = normalized.slice(0, maxLength - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const base =
    lastSpace > Math.floor(maxLength * 0.6) ? cut.slice(0, lastSpace) : cut;
  return `${base.trimEnd()}…`;
}

type OgImage =
  | string
  | {
      url: string | URL;
      width?: number;
      height?: number;
      alt?: string;
    };

export type PageMetadataInput = {
  /** Page title without brand suffix (template adds `| ELRIX ENERGY`). */
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  images?: OgImage[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string | string[];
  robots?: Metadata['robots'];
};

export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const description = trimDescription(input.description);
  const ogTitle = input.ogTitle ?? `${input.title} | ${BRAND.name}`;
  const ogDescription = trimDescription(input.ogDescription ?? input.description);
  const canonical = buildCanonical(input.path);
  const images = input.images ?? [DEFAULT_OG_IMAGE];
  const twitterImages = images.map((img) =>
    typeof img === 'string' ? img : img.url,
  );

  return {
    title: input.title,
    description,
    ...(input.keywords && { keywords: input.keywords }),
    alternates: buildAlternates(input.path),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      type: input.type ?? 'website',
      ...(input.publishedTime && { publishedTime: input.publishedTime }),
      ...(input.modifiedTime && { modifiedTime: input.modifiedTime }),
      ...(input.authors?.length && { authors: input.authors }),
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: twitterImages,
    },
    ...(input.robots && { robots: input.robots }),
  };
}

export const buildOrganizationSchema = () => ({
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: BRAND.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}${BRAND.logoPath}`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  sameAs: [
    'https://www.facebook.com/profile.php?id=61588416327126',
    'https://www.instagram.com/elrix_energy/',
  ],
});
