"use client";
import { experienceData } from "@/app/data/data";
import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";

function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayedData = showAll ? experienceData : experienceData.slice(0, 2);

  return (
    <SectionWrapper id="experience">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <h2 className="section-heading">Experience</h2>

        <div style={{ position: "relative", paddingLeft: "24px" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "8px",
              bottom: "8px",
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
              borderRadius: "2px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {displayedData.map((exp, index) => (
              <motion.div
                key={exp.company + exp.startDate}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ position: "relative" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-30px",
                    top: "20px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    border: "2px solid var(--bg-primary)",
                    boxShadow: "0 0 0 3px var(--accent-glow)",
                  }}
                />

                <div
                  className="glass-card"
                  style={{ padding: "24px 28px" }}
                >
                  {/* Header row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        {exp.company}
                      </h3>
                      {exp.client && (
                        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                          Client:{" "}
                          <span style={{ color: "var(--text-secondary)" }}>
                            {exp.client}
                          </span>
                        </p>
                      )}
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "2px" }}>
                        <span
                          style={{
                            background: "var(--accent-glow)",
                            color: "var(--accent)",
                            padding: "2px 10px",
                            borderRadius: "50px",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            border: "1px solid var(--accent)",
                          }}
                        >
                          {exp.position}
                        </span>
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                        }}
                      >
                        {exp.startDate} → {exp.endDate}
                      </p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                        📍 {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Tech chips */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "14px",
                    }}
                  >
                    {exp.skills.map((skill) => (
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
                    }}
                  >
                    {exp.descriptions.map((desc, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "10px",
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          ▸
                        </span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Show More */}
        <AnimatePresence>
          {!showAll && experienceData.length > 2 && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: 10 }}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "28px",
              }}
            >
              <button
                onClick={() => setShowAll(true)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 24px",
                  borderRadius: "50px",
                  border: "1.5px dashed var(--border)",
                  background: "transparent",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                }}
              >
                Show More <HiChevronDown />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

export default Experience;
