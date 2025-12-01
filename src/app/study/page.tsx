import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StudyHero } from "@/components/study/hero";
import { StudyPainPoints } from "@/components/study/pain-points";
import { StudyConcept } from "@/components/study/concept";
import { StudyFeatures } from "@/components/study/features";
import { StudyProfile } from "@/components/study/profile";
import { StudyPricing } from "@/components/study/pricing";
import { StudyFAQ } from "@/components/study/faq";
import { Contact } from "@/components/sections/contact";

export const metadata = {
    title: "仙台の大人のAI・プログラミング図工室 | 初心者歓迎",
    description: "仙台駅前で、作りたいものを形にする大人のための図工室。AIを活用して、プログラミング未経験でもアプリ開発や業務効率化ツールを自作できます。",
};

export default function StudyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <StudyHero />
            <StudyPainPoints />
            <StudyConcept />
            <StudyFeatures />
            <StudyProfile />
            <StudyPricing />
            <StudyFAQ />
            <Contact />
            <Footer />
        </main>
    );
}

