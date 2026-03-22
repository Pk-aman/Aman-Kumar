"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionWrapper from "../SectionWrapper";
import { AiOutlineGithub, AiOutlineLinkedin, AiFillMail } from "react-icons/ai";
import { HiPhone, HiPaperAirplane } from "react-icons/hi2";
import Link from "next/link";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    position: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({ email: "", name: "", phone: "", company: "", position: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("Message sent successfully! I'll get back to you soon.");
        resetForm();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SectionWrapper id="contact">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <h2 className="section-heading">Contact Me</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* Info Panel */}
          <div
            className="glass-card"
            style={{
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                Let's work together
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Have a project in mind or looking to hire a frontend engineer?
                Feel free to reach out!
              </p>
            </div>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a
                href="mailto:a.amankrpin2@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "var(--accent-glow)",
                    border: "1px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <AiFillMail />
                </span>
                a.amankrpin2@gmail.com
              </a>
              <a
                href="tel:+916202440500"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "var(--accent-glow)",
                    border: "1px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  <HiPhone />
                </span>
                +91-6202440500
              </a>
            </div>

            {/* Social */}
            <div>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Find me on
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { href: "https://github.com/Pk-aman", icon: <AiOutlineGithub />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/aman-kumar-aa59741a0/", icon: <AiOutlineLinkedin />, label: "LinkedIn" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
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
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: "32px" }}>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="email"
                    style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    EMAIL *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="name"
                    style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="phone"
                    style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    PHONE
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Company */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="company"
                    style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    COMPANY
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Position - full width */}
                <div
                  style={{
                    gridColumn: "1 / -1",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    htmlFor="position"
                    style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    POSITION / ROLE
                  </label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    placeholder="e.g. Senior Frontend Engineer"
                    value={formData.position}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Message - full width */}
                <div
                  style={{
                    gridColumn: "1 / -1",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    htmlFor="message"
                    style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    JOB DESCRIPTION *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the role, tech stack, and required experience..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-input"
                    style={{ resize: "vertical", borderRadius: "12px" }}
                    required
                  />
                </div>

                {/* Submit */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTop: "2px solid white",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                            display: "inline-block",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @media (max-width: 768px) {
            #contact > div > div:nth-child(2) {
              grid-template-columns: 1fr !important;
            }
            #contact form > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        toastStyle={{ borderRadius: "12px" }}
      />
    </SectionWrapper>
  );
}

export default ContactForm;
