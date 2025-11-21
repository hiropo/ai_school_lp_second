"use client";

import { Section } from "@/components/ui/section";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "パソコンが本当に苦手ですが大丈夫ですか？",
        answer: "はい、大丈夫です。専門用語を使わず、画面共有をしながら一つずつ丁寧にサポートします。「マウスの操作」から不安な方でも、AIを使えば驚くほど簡単に作業ができます。",
    },
    {
        question: "自分の業種でも対応できますか？",
        answer: "基本的にどのような業種でも対応可能です。予約が必要なサロン、教室、相談業はもちろん、物販や会員制サイトなども構築可能です。まずは無料相談で実現したいことをお聞かせください。",
    },
    {
        question: "制作にかかる期間はどれくらいですか？",
        answer: "作りたいものの規模によりますが、シンプルなHPと予約システムであれば、最短1ヶ月（週1回の相談×4回）で公開までたどり着く方が多いです。",
    },
    {
        question: "途中でプランを変更することはできますか？",
        answer: "はい、可能です。最初はライトプランで始めて、本格的に作り込みたい時期だけ伴走プランにするなど、状況に合わせて柔軟に対応いたします。",
    },
    {
        question: "解約はいつでもできますか？",
        answer: "はい、月単位での契約ですので、いつでも解約可能です。違約金なども一切かかりません。",
    },
];

export function FAQ() {
    return (
        <Section className="bg-white max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">よくあるご質問</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-medium text-gray-900">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Section>
    );
}
