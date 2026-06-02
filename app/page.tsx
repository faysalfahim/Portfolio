import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Research } from "@/components/sections/research";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { CompetitiveProgramming } from "@/components/sections/competitive-programming";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <CompetitiveProgramming />
        <Skills />
        <Education />
        <Awards />
        <Contact />
      </main>
    </>
  );
}
