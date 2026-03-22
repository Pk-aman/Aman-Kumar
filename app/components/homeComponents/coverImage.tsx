"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import coverImage from "../../assets/poster.jpg";
import profileImage from "../../assets/pp.jpg";
import { overviewData } from "@/app/data/data";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiFillMail,
  AiOutlineDownload,
} from "react-icons/ai";
import { HiArrowDown } from "react-icons/hi2";

function CoverImage() {
  return (
    <section
      id="hero"
      className="hero-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background cover blurred image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src={coverImage}
          alt="Background"
          fill
          style={{ objectFit: "cover", opacity: 0.06, filter: "blur(2px)" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 100% 80% at 50% 0%, var(--accent-glow), transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          textAlign: "center",
        }}
      >
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="animate-float"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            padding: "4px",
            background: "var(--gradient)",
            boxShadow: "0 0 40px var(--accent-glow)",
          }}
        >
          <Image
            src={profileImage}
            alt="Aman Kumar"
            width={150}
            height={150}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              border: "3px solid var(--bg-primary)",
            }}
          />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              background: "var(--gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {overviewData.name}
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              fontWeight: 500,
              color: "var(--text-secondary)",
              letterSpacing: "0.12em",
              marginTop: "8px",
              textTransform: "uppercase",
            }}
          >
            {overviewData.title}
          </p>
        </motion.div>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: "620px",
          }}
        >
          Full Stack Developer crafting{" "}
          <strong style={{ color: "var(--text-primary)" }}>
            high-performance
          </strong>{" "}
          web applications with React.js, Next.js & TypeScript.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
        >
          <a
            href="/AmanKumar_Resume_Frontend.pdf"
            download
            className="btn-primary"
          >
            <AiOutlineDownload />
            Download Resume
          </a>
          <button
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary"
          >
            <AiFillMail />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          style={{ display: "flex", gap: "16px", alignItems: "center" }}
        >
          <Link
            href="https://github.com/Pk-aman"
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--text-muted)",
              fontSize: "1.4rem",
              transition: "color 0.2s ease, transform 0.2s ease",
              textDecoration: "none",
            }}
            aria-label="GitHub"
          >
            <AiOutlineGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aman-kumar-aa59741a0/"
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--text-muted)",
              fontSize: "1.4rem",
              transition: "color 0.2s ease",
              textDecoration: "none",
            }}
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin />
          </Link>
          <Link
            href="mailto:a.amankrpin2@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--text-muted)",
              fontSize: "1.4rem",
              transition: "color 0.2s ease",
              textDecoration: "none",
            }}
            aria-label="Email"
          >
            <AiFillMail />
          </Link>
          <span
            style={{
              width: "1px",
              height: "20px",
              background: "var(--border)",
              margin: "0 4px",
            }}
          />
          <a
            href="tel:+916202440500"
            style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            +91-6202440500
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "var(--text-muted)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <HiArrowDown
          style={{
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}

export default CoverImage;
