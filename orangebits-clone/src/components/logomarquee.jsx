import { useEffect, useRef, useState } from "react";

function LogoMarquee() {
  const marqueeRef = useRef(null);
  const [start, setStart] = useState(false);

  // ✅ Move logos here
  const logos = [
    "/public/HIRE.png",
    "/public/akeed.png",
    "/public/perennial.png",
    "/public/GlobalLogic.png",
    "/public/Amantya.png",
    "/public/aventier.png",
    "/public/e-Zest.png",
    "/public/fable.png",
    "/public/isha.png",

    "/public/GL.png",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 },
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="logo-section" ref={marqueeRef}>
      <div className={`logo-track ${start ? "start" : ""}`}>
        {[...logos, ...logos].map((logo, i) => (
          <div className="logo-item" key={i}>
            <img src={logo} alt="logo" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogoMarquee;
