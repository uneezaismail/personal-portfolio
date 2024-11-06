import Image from "next/image";
import Navbar from "./components/navbar/page";
import Hero from "./components/herosection/page";
import About from "./components/about/page";
import Skills from "./components/skills/page";
import Portfolio from "./components/portfolio/page";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
  </div>
  );
}
