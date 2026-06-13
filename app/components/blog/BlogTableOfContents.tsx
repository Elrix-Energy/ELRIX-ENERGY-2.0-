import Link from "next/link";
import type { BlogHeading } from "@/app/lib/blogUtils";

interface BlogTableOfContentsProps {
  headings: BlogHeading[];
}

export default function BlogTableOfContents({ headings }: BlogTableOfContentsProps) {
  if (headings.length < 2) return null;

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <h2 className="blog-toc__title">In this article</h2>
      <ol className="blog-toc__list">
        {headings.map((heading) => (
          <li key={heading.id}>
            <Link href={`#${heading.id}`}>{heading.text}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
