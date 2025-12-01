"use client";

import { Section } from "@/components/ui/section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
    {
        question: "プログラミング未経験ですが大丈夫ですか？",
        answer: "はい、大歓迎です！むしろ「未経験だけど何か作ってみたい」という方のための場所です。AIがコードを書いてくれるので、専門知識は必要ありません。",
    },
    {
        question: "パソコンのスペックはどのくらい必要ですか？",
        answer: "ブラウザ（Google Chromeなど）が快適に動くパソコンであれば、WindowsでもMacでも大丈夫です。高価なPCを買い直す必要はありません。",
    },
    {
        question: "作りたいものがまだ決まっていません。",
        answer: "大丈夫です。「業務を楽にしたい」「趣味のサイトを作りたい」といった漠然としたイメージから、一緒にアイデアを形にしていきましょう。",
    },
    {
        question: "開催場所はどこですか？",
        answer: "仙台駅周辺のコワーキングスペースやカフェで開催しています。詳細な場所は参加者の方にご案内しています。",
    },
    {
        question: "年齢制限はありますか？",
        answer: "特にありませんが、30代〜50代の社会人の方が中心です。「大人のパソコンAI教室」として、落ち着いた雰囲気で活動しています。",
    },
];

export function StudyFAQ() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">よくある質問</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-bold text-gray-900">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Section>
    );
}
