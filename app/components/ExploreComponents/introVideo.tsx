import React from "react";

function IntroVideo() {
  return (
    <>
      <div className="p-5 bg-white rounded-xl flex justify-center">
        <iframe
          className="rounded-3xl m-3"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Bw-0tgPFfZ4?rel=0"
          title="Introduction"
        ></iframe>
      </div>
    </>
  );
}

export default IntroVideo;
