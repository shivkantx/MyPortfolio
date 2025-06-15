import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function ScrollToSectionOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || "home";
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
}

function PageContent() {
  return (
    <div className="relative overflow-x-hidden w-full sm:px-6 md:px-10 bg-[#020138] backdrop-blur-2xl text-white">
      {/* Sections rendered on the same page */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToSectionOnRouteChange />
      <Header />
      <PageContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
