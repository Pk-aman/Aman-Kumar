"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionWrapper({
  children,
  id,
  className,
  style,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      style={{
        paddingTop: "96px",
        paddingBottom: "24px",
        ...style,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
