import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Hero2 from "./sections/Hero2.jsx";
import AboutStats from "./components/aboutstat.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <AboutStats />
    </div>
  );
}

export default App;
