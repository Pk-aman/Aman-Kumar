"use client";
import React from "react";
import { overviewData } from "@/app/data/data";
import SectionWrapper from "../SectionWrapper";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "UI Components Built" },
  { value: "4", label: "Companies" },
];

function Overview() {
  return (
    <SectionWrapper id="about">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <h2 className="section-heading">About Me</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Description */}
          <div className="glass-card" style={{ padding: "32px" }}>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                fontSize: "0.975rem",
              }}
            >
              {overviewData.description.split("Frontend Developer").map((part, i) =>
                i === 0 ? (
                  <React.Fragment key={i}>
                    {part}
                    <strong
                      style={{
                        background: "var(--gradient)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontWeight: 700,
                      }}
                    >
                      Frontend Developer
                    </strong>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card"
                style={{
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    background: "var(--gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #about > div > div:nth-child(2) {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </SectionWrapper>
  );
}

export default Overview;
