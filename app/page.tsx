import { FaHome, FaPhone, FaUser } from "react-icons/fa";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import { TabsDemo } from "../components/Aboutme";
import { HeroHighlightDemo } from "../components/Project";
import { navItems } from "@/data/index";
import {CardHoverEffectDemo} from "../components/card"
import { AnimatedModalDemo } from "../components/Contact";

const Home: React.FC = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
      <div className="w-screen h-30">
        <FloatingNav navItems={navItems} />
        <Hero />
        <TabsDemo />
        <HeroHighlightDemo />
        <CardHoverEffectDemo />
        <AnimatedModalDemo />

      </div>
    </main>
  );
}

export default Home;






