"use client";

import Image from "next/image";
import { projectCaseStudies } from "@/app/data/projectsData";
import { FinalCta } from "../sections";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>
            On-grid residential and industrial solar installations delivered across Nellore and
            Tirupati by ELRIX ENERGY&apos;s MNRE-certified EPC teams.
          </p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className={styles.grid}>
            {projectCaseStudies.map((project) => (
              <article key={project.id} className={styles.card}>
                {project.image ? (
                  <div className={styles.cardMedia}>
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.segment} solar installation`}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className={styles.cardImage}
                    />
                  </div>
                ) : null}
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

      <FinalCta
        title="Plan your next installation"
        description="Share your roof details and monthly bill — our Nellore team will recommend the right system size and subsidy path."
        primaryHref="/contact"
        primaryLabel="Get a Free Quote"
        secondaryHref="/#calculator"
        secondaryLabel="Try Solar Calculator"
      />
    </div>
  );
};

export default Projects;
