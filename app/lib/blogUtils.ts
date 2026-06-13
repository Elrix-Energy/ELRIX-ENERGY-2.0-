/** Estimate reading time from HTML or plain text (words per minute). */
export function estimateReadingTimeMinutes(
  htmlOrText: string,
  wordsPerMinute = 220,
): number {
  const text = htmlOrText
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

export interface BlogHeading {
  id: string;
  text: string;
}

/** Extract h2 headings from article HTML for table of contents. */
export function extractH2Headings(html: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const pattern = /<h2[^>]*>(.*?)<\/h2>/gi;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(html)) !== null) {
    const raw = match[1].replace(/<[^>]+>/g, "").trim();
    if (!raw) continue;
    index += 1;
    const id = `section-${index}-${slugify(raw)}`;
    headings.push({ id, text: raw });
  }

  return headings;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

/** Inject id attributes into h2 tags for in-page anchor links. */
export function injectHeadingIds(html: string): string {
  let index = 0;
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_full, attrs, inner) => {
    const text = String(inner).replace(/<[^>]+>/g, "").trim();
    if (!text) return _full;
    index += 1;
    const id = `section-${index}-${slugify(text)}`;
    const attrStr = String(attrs ?? "");
    if (/\bid=/.test(attrStr)) {
      return `<h2${attrStr}>${inner}</h2>`;
    }
    return `<h2${attrStr} id="${id}">${inner}</h2>`;
  });
}
