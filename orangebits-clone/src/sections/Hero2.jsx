import { FaCode, FaCogs, FaUsers } from "react-icons/fa";

function Hero2() {
  return (
    <section className="hero2">
      {/* Heading */}
      <div className="hero2-header">
        <h2 className="sub-title">Orangebits Areas of Expertise to</h2>
        <h3>Drive Success</h3>
        <p className="descp">
          Orangebits is a software development company in India specializing in
          custom software development, enterprise application development, web
          and mobile app solutions, artificial intelligence systems, and product
          engineering services.
        </p>
      </div>

      {/* Cards */}
      <div className="hero2-cards">
        <div className="card">
          <FaCode className="icon" />
          <h3>Enterprise Application Development →</h3>
        </div>

        <div className="card">
          <FaCogs className="icon" />
          <h3>Product Engineering Services →</h3>
        </div>

        <div className="card">
          <FaUsers className="icon" />
          <h3>Staff Augmentation Services →</h3>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="hero2-bottom">
        <div>
          <p className="highlight">
            We're dedicated to fueling your business growth.
          </p>
          <h3>Looking for top-notch IT business solutions?</h3>
        </div>

        <button className="cta-btn">SUBMIT AN ENQUIRY</button>
      </div>
    </section>
  );
}

export default Hero2;
