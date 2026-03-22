"use client";
import React, { useState } from "react";
import { educationsData } from "@/app/data/data";
import SectionWrapper from "../SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiAcademicCap } from "react-icons/hi2";

function Educations() {
  const [showAll, setShowAll] = useState(false);
  const displayedData = showAll ? educationsData : educationsData.slice(0, 2);

  return (
    <SectionWrapper id="education">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <h2 className="section-heading">Education</h2>

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
                "linear-gradient(to bottom, var(--accent-2), var(--accent), transparent)",
              borderRadius: "2px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {displayedData.map((edu, index) => (
              <motion.div
                key={`${edu.university}-${index}`}
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
                    background: "var(--accent-2)",
                    border: "2px solid var(--bg-primary)",
                    boxShadow: "0 0 0 3px var(--accent-glow)",
                  }}
                />

                <div className="glass-card" style={{ padding: "24px 28px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <HiAcademicCap
                        style={{ color: "var(--accent-2)", fontSize: "1.3rem", flexShrink: 0 }}
                      />
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        {edu.university}
                      </h3>
                    </div>
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                      }}
                    >
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "6px",
                    }}
                  >
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                      📍 {edu.location}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      gap: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                      CGPA:{" "}
                      <strong style={{ color: "var(--accent)" }}>
                        {edu.CGPA_Percentage}
                      </strong>
                    </span>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                      Passed:{" "}
                      <strong style={{ color: "var(--text-secondary)" }}>
                        {edu.passingYear}
                      </strong>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Show More */}
        <AnimatePresence>
          {!showAll && educationsData.length > 2 && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: 10 }}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "24px",
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

export default Educations;
