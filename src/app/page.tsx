import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { UseCases } from "@/components/sections/use-cases";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
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
      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは無料相談で、<br />
            あなたの「やりたいこと」を聞かせてください
          </h2>
          <p className="text-lg mb-8 opacity-90">
            無理な勧誘は一切ありません。10分話すだけでも、きっと道が開けます。
          </p>
          <Button variant="secondary" size="lg" className="h-14 px-8 text-lg text-primary font-bold" asChild>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf..." target="_blank">
              無料相談を予約する
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
