import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Hero2 from "./sections/Hero2.jsx";
import AboutStats from "./components/aboutstat.jsx";
import WhyChoose from "./components/whyChoose.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <AboutStats />
      <WhyChoose />
    </div>
  );
}

export default App;
