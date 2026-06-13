"use client";

import Image from "next/image";
import { projectCaseStudies } from "@/app/data/projectsData";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>
            Sample case-study layouts for residential, commercial, industrial, and O&amp;M work
            across Nellore, Tirupati, Kadapa, and Ongole.
          </p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className={styles.notice} role="status">
            <p>
              <strong>Placeholder portfolio.</strong> Final project photos, client names, and
              generation data will be published after content sign-off. This page stays{" "}
              <code>noindex</code> until then.
            </p>
          </div>

          <div className={styles.grid}>
            {projectCaseStudies.map((project) => (
              <article key={project.id} className={styles.card}>
                <div className={styles.cardMedia}>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className={styles.cardImage}
                  />
                  {project.isPlaceholder ? (
                    <span className={styles.cardBadge}>Case study coming soon</span>
                  ) : null}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>{project.segment}</span>
                    <span>{project.location}</span>
                    <span>{project.capacity}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{project.title}</h2>
                  <p className={styles.cardSummary}>{project.summary}</p>
                  <ul className={styles.cardHighlights}>
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
