"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { BookX, HeartCrack, MonitorX } from "lucide-react";

const pains = [
    {
        icon: BookX,
        title: "エクセル・PC作業が苦手",
        description: "関数が覚えられない、資料作成に時間がかかる。もっと効率的に仕事を終わらせたい。",
    },
    {
        icon: MonitorX,
        title: "単純作業を自動化したい",
        description: "毎日同じデータをコピペするだけの作業。AIやツールを使って自動化したいけどやり方がわからない。",
    },
    {
        icon: HeartCrack,
        title: "誰に聞けばいいかわからない",
        description: "職場に詳しい人がいない。ネットで調べても専門用語ばかりで理解できない。",
    },
];

export function StudyPainPoints() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    こんな<span className="text-orange-500">悩み</span>ありませんか？
                </h2>
                <p className="text-gray-600">
                    「プログラミングは難しい」と思い込んでいませんか？
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {pains.map((pain, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow"
                    >
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                            <pain.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{pain.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {pain.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
