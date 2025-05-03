import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export const revalidate = 30;

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About />
      <Skills />
      <Projects />

      <Contact/>  
    </> 
  );
}

