import React, { useEffect, useRef } from "react";

const ScrollVideo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollTop = window.scrollY || window.pageYOffset;
      const offsetTop = rect.top + scrollTop;
      const maxScroll = rect.height - windowHeight;
      const progress = Math.min(Math.max((scrollTop - offsetTop) / maxScroll, 0), 1);

      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    const handleLoaded = () => {
      video.pause();
      handleScroll();
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    window.addEventListener("scroll", handleScroll);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", height: "200vh" }}>
      <p
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          padding: "4px 8px",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          zIndex: 1,
        }}
      >
        Scroll to play
      </p>
      <video
        ref={videoRef}
        src="/videos/seq.mp4"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "sticky",
          top: 0,
        }}
        preload="auto"
        muted
      />
    </div>
  );
};

export default ScrollVideo;
