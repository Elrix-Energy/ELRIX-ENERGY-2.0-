import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogArticles } from "../../data/blogData";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = blogArticles.find((b) => b.id === id);
  if (!article) return { title: "Blog | ELRIX ENERGY" };
  return { title: `${article.title} | ELRIX ENERGY`, description: article.summary };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = blogArticles.find((b) => b.id === id);
  if (!article) notFound();

  return (
    <div className="blog-post-page" style={{ paddingTop: "100px", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Link href="/blog" className="text-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem", fontWeight: "500" }}>
          <ArrowLeft size={18} /> Back to Articles
        </Link>
        <header style={{ marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: "1.2" }}>{article.title}</h1>
          <div style={{ display: "flex", gap: "1rem", color: "var(--text-light)", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "2rem" }}>
            <span>{article.date}</span><span>•</span><span style={{ color: "var(--primary)", fontWeight: "600" }}>{article.author}</span>
          </div>
        </header>
        <div className="article-content" style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--text-dark)" }} dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
}
