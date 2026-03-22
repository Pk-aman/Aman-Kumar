"use client";
import { skillsData } from "@/app/data/data";
import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";

const categoryColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#ffffff",
  "Tailwind CSS": "#38BDF8",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  PostgreSQL: "#336791",
  Zustand: "#FF6B6B",
  Redux: "#764ABC",
  "Node.js": "#339933",
  GitHub: "#ffffff",
  Jira: "#0052CC",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Jest: "#C21325",
  "RESTful API": "#FF6B35",
};

function Skills() {
  return (
    <SectionWrapper id="skills">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <h2 className="section-heading">Skills</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
            >
              <div
                className="skill-badge"
                style={{ position: "relative" }}
              >
                {/* Colored dot */}
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: categoryColors[skill.name] ?? "var(--accent)",
                    flexShrink: 0,
                    boxShadow: `0 0 6px ${categoryColors[skill.name] ?? "var(--accent)"}60`,
                  }}
                />
                <span style={{ fontWeight: 600 }}>{skill.name}</span>
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                  }}
                >
                  {skill.experience}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
