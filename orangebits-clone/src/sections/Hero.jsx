import React, { useEffect, useState } from "react";

const Hero = () => {
  // ✅ Step 1: Data
  const texts = [
    "Enterprise application Development",
    "Product engineering services",
    "Staff Augmentation process",
  ];

  // ✅ Step 2: State
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  // ✅ Step 3: Logic
  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }

        if (charIndex === currentText.length) {
          setIsDeleting(true);
        }

        if (charIndex === 0 && isDeleting) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // ✅ Step 4: Return JSX
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">
          Software Development <br />
          Company Delivering <br />
          Scalable Digital Solutions
        </h1>

        <h2 className="hero-subtext">{displayText}</h2>
      </div>
    </div>
  );
};

export default Hero;
