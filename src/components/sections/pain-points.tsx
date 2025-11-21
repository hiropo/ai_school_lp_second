"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const pains = [
    {
        title: "予約電話で1日が終わる",
        description: "施術中も電話が鳴り止まず、目の前のお客様に集中できない。休憩時間も折り返し電話で潰れてしまう。",
    },
    {
        title: "IT外注費が高すぎる",
        description: "ホームページ制作に50万円、毎月の保守費に数万円...。個人事業主には重すぎるコスト負担。",
    },
    {
        title: "SNS集客の限界",
        description: "インスタ投稿は頑張っているけど、そこから予約に繋がらない。DMでのやり取りも管理しきれない。",
    },
    {
        title: "24時間対応できない",
        description: "夜中や早朝の予約問い合わせに対応できず、みすみすチャンスを逃している気がする。",
    },
    {
        title: "事務作業で疲弊",
        description: "紙の予約表とExcelの売上管理。手作業の繰り返しで、本来やりたいサービスの向上に時間が割けない。",
    },
    {
        title: "ITが苦手で不安",
        description: "「自分でやれば安い」とは聞くけど、何から手をつければいいかわからない。挫折するのが怖い。",
    },
];

export function PainPoints() {
    return (
        <Section id="pain-points" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    こんな<span className="text-red-500">お悩み</span>ありませんか？
                </h2>
                <p className="text-gray-600">
                    多くの個人事業主様が、同じ壁にぶつかっています。
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pains.map((pain, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start gap-4">
                            <XCircle className="w-8 h-8 text-red-400 shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{pain.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {pain.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
