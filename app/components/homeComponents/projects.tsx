"use client";
import { projectsData } from "@/app/data/data";
import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";

function Projects() {
  return (
    <SectionWrapper id="projects">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <h2 className="section-heading">Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-card"
              style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Project name row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      width: "36px",
                      height: "3px",
                      borderRadius: "2px",
                      background: "var(--gradient)",
                      marginBottom: "10px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.name}
                  </h3>
                </div>

                {/* GitHub / Live links */}
                <div style={{ display: "flex", gap: "8px", flexShrink: 0, marginTop: "4px" }}>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        border: "1.5px solid var(--border)",
                        background: "var(--bg-secondary)",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      aria-label="GitHub"
                    >
                      <AiOutlineGithub />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        border: "1.5px solid var(--border)",
                        background: "var(--bg-secondary)",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      aria-label="Live"
                    >
                      <HiArrowTopRightOnSquare />
                    </Link>
                  )}
                </div>
              </div>

              {/* Tech chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.skills.map((skill) => (
                  <span key={skill} className="tech-chip">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Descriptions */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  flex: 1,
                }}
              >
                {project.descriptions.map((desc, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}
                    >
                      ▸
                    </span>
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Projects;
