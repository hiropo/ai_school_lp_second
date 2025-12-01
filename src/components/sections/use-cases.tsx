"use client";

import { Section } from "@/components/ui/section";
import Image from "next/image";

const cases = [
    {
        role: "非エンジニアの経営者",
        image: "/images/coach.png",
        result: "Webアプリ開発",
        description: "外注なしでWebアプリを自社開発。複雑な決済機能もAIと相談しながら一人で実装完了。",
    },
    {
        role: "グッズ作成事業者",
        image: "/images/salon.png",
        result: "HP自作",
        description: "以前は外注していたHPを、自分たちでリニューアル。商品写真の更新も自由にできるように。",
    },
    {
        role: "整体・サロン経営",
        image: "/images/salon.png",
        result: "週20時間の時短",
        description: "電話予約をWeb予約に完全移行。施術中の電話対応がなくなり、お客様満足度も向上。",
    },
];

export function UseCases() {
    return (
        <Section id="use-cases" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    様々な業種で<span className="text-primary">成果</span>が出ています
                </h2>
                <p className="text-gray-600">
                    あなたのビジネスでも、同じような変革が起こせます。
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {cases.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                        <div className="aspect-[4/3] relative">
                            {/* Note: Using external images for demo. In production, use local optimized images. */}
                            <img
                                src={item.image}
                                alt={item.role}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="inline-block bg-primary text-white text-xs font-bold px-2 py-1 rounded mb-2">
                                {item.result}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                            <p className="text-sm text-gray-200 leading-relaxed opacity-90">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
