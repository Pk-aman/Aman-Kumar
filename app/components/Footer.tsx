import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin, AiFillMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "40px 24px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            background: "var(--gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AK.
        </span>

        {/* Social Links */}
        <div style={{ display: "flex", gap: "16px" }}>
          <Link
            href="https://github.com/Pk-aman"
            target="_blank"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1.5px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            aria-label="GitHub"
          >
            <AiOutlineGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aman-kumar-aa59741a0/"
            target="_blank"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1.5px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin />
          </Link>
          <Link
            href="mailto:a.amankrpin2@gmail.com"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1.5px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            aria-label="Email"
          >
            <AiFillMail />
          </Link>
        </div>

        {/* Copyright */}
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          © 2025 Aman Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
