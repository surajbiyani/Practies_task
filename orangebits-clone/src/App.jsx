import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Hero2 from "./sections/Hero2.jsx";
import AboutStats from "./components/aboutstat.jsx";
import WhyChoose from "./components/whyChoose.jsx";
import LogoMarquee from "./components/logomarquee.jsx";
import Testimonial2 from "./components/testimonial2.jsx";
import FAQ from "./components/faq.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <AboutStats />
      <WhyChoose />
      <LogoMarquee />
      <Testimonial2 />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
