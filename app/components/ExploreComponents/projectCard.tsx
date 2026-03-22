import { ProjectCardDetails } from "@/app/utility/types";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

function ProjectCard({ name, description, html_url }: ProjectCardDetails) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        height: "100%",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          width: "36px",
          height: "3px",
          borderRadius: "2px",
          background: "var(--gradient)",
        }}
      />

      {/* Name + GitHub link */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            wordBreak: "break-word",
          }}
        >
          {name}
        </h3>
        <Link
          href={html_url}
          target="_blank"
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "8px",
            border: "1.5px solid var(--border)",
            background: "var(--bg-secondary)",
            color: "var(--text-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            textDecoration: "none",
            flexShrink: 0,
            transition: "all 0.2s ease",
          }}
          aria-label="GitHub"
        >
          <AiOutlineGithub />
        </Link>
      </div>

      {/* Description */}
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {description || (
          <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
            No description available.
          </span>
        )}
      </p>

      {/* View on GitHub button */}
      <Link
        href={html_url}
        target="_blank"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "var(--accent)",
          textDecoration: "none",
          marginTop: "auto",
          transition: "opacity 0.2s",
        }}
      >
        <HiArrowTopRightOnSquare />
        View on GitHub
      </Link>
    </div>
  );
}

export default ProjectCard;
