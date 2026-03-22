import React from "react";

function IntroVideo() {
  return (
    <div
      style={{
        padding: "32px 24px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <h2 className="section-heading">Video Introduction</h2>
      <div
        className="glass-card"
        style={{
          overflow: "hidden",
          borderRadius: "20px",
          padding: "0",
          lineHeight: 0,
        }}
      >
        <iframe
          width="100%"
          height="520"
          src="https://www.youtube.com/embed/Bw-0tgPFfZ4?rel=0"
          title="Aman Kumar — Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            border: "none",
            display: "block",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default IntroVideo;
