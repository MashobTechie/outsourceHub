import { Contact } from "@/components/Contact";
import { Contrast } from "@/components/Contrast";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Roles } from "@/components/Roles";
import { Trust } from "@/components/Trust";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bone focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <Hero />
        <Trust />
        <Contrast />
        <Roles />
        <Process />
        <Why />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
