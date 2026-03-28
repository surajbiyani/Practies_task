import { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    "What services does Orangebits provide?",
    "Do you offer custom software development in India?",
    "Which industries do you serve?",
    "Do you develop enterprise-level applications?",
    "Where is Orangebits located?",
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-h2">Frequently Asked Questions (FAQs):</h2>
      {data.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>
              {index + 1}. {item}
            </span>
            <span className="arrow">⌄</span>
          </div>

          <div className="faq-answer">
            <p>
              Orangebits provides custom software development, enterprise
              application development, web and mobile app development,
              artificial intelligence solutions, product engineering services,
              and IT staff augmentation.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
