import About from "@/components/About";
import CardOfTheDay from "@/components/CardOfTheDay";
import CtaSection from "@/components/CTA";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <header className="bg-[url(/images/bg-primary.png)] bg-cover bg-center relative h-screen">
        <Navbar />
        <Hero />
        <div className="absolute w-full h-full top-0 left-0 bg-[#121B2C]/97 z-10"></div>
      </header>
      <Discover />
      <CtaSection />
      <About />
      <CardOfTheDay />
      <Partners />
      <Testimonials />
    </>
  );
}
