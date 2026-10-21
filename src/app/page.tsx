import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Technology from "@/components/sections/Technology";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhatWeBuild />
        <Projects />
        <Process />
        <About />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
