import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { UseCases } from "@/components/sections/use-cases";
import { Profile } from "@/components/sections/profile";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PainPoints />
      <Solution />
      <Features />
      <UseCases />
      <Profile />
      <Pricing />
      <FAQ />

      <Contact />

      <Footer />
    </main>
  );
}

