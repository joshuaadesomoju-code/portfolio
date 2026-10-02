import { useCallback, useEffect, useState } from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { startSmoothScroll } from "./lib/motion";
import useScrollReveals from "./lib/useScrollReveals";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  useEffect(() => startSmoothScroll(), []);
  useScrollReveals();

  return (
    <>
      <Intro onDone={handleIntroDone} />
      <Nav />
      <main>
        <Hero ready={introDone} />
        <Projects />
        <Services />
        <About />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
