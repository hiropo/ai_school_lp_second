"use client";

import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "作りたいものが作れる",
        description: "「これを勉強しなさい」という押し付けはありません。あなたのアイデアが教材です。",
    },
    {
        title: "現役エンジニアがサポート",
        description: "技術的な詰まりどころや、AIへの指示の出し方をプロが直接アドバイスします。",
    },
    {
        title: "PC1台で参加OK",
        description: "ハイスペックなPCは不要。ブラウザが動けば、どんなパソコンでも開発できます。",
    },
    {
        title: "仲間との交流",
        description: "同じように「何かを作りたい」と思っている仲間との出会いが、モチベーションになります。",
    },
    {
        title: "成果発表会",
        description: "定期的に作ったものを発表する場を設けます。フィードバックをもらうことで成長できます。",
    },
    {
        title: "オンライン質問し放題",
        description: "会えない時間も、チャットツール（Discordなど）でいつでも質問可能です。",
    },
];

export function StudyFeatures() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    大人のパソコンAI教室の<span className="text-orange-500">特徴</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                            <h3 className="font-bold text-lg">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
