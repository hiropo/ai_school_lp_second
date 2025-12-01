"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "プライベートレッスン",
        price: "8,000",
        period: "1回 (60分)",
        description: "必要な時だけ、ピンポイントで相談したい方へ",
        features: [
            "1回60分のマンツーマン相談",
            "ツールの使い方レクチャー",
            "エラー解消・トラブル対応",
            "AIプロンプト作成支援",
        ],
        cta: "申し込む",
        variant: "outline" as const,
    },
    {
        name: "スタンダードコース",
        price: "16,000",
        description: "週1回のペースで着実に進めたい方へ",
        popular: true,
        features: [
            "月4回 オフライン相談 (各60分)",
            "実装サポート (HP/予約/決済)",
            "技術レビュー・セキュリティチェック",
            "AIプロンプト詳細指導",
        ],
        cta: "まずは無料相談",
        variant: "default" as const,
    },
];

export function Pricing() {
    return (
        <Section id="pricing" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    シンプルな<span className="text-primary">料金プラン</span>
                </h2>
                <p className="text-gray-600">
                    外注費の1/10以下のコストで、一生使えるスキルと資産が手に入ります。
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative bg-white rounded-2xl p-8 border w-full md:w-1/2 max-w-md ${plan.popular
                            ? "border-primary shadow-xl scale-105 z-10"
                            : "border-gray-100 shadow-sm"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                                一番人気
                            </div>
                        )}

                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

                            {/* Discount Display */}
                            <div className="mb-6">
                                {plan.name === "プライベートレッスン" ? (
                                    <>
                                        <div className="flex items-center justify-center gap-2 text-gray-400 line-through text-sm">
                                            <span>通常価格 ¥10,000</span>
                                        </div>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-sm text-gray-500">1回</span>
                                            <span className="text-4xl font-bold text-red-600">¥{plan.price}</span>
                                            {plan.period && <span className="text-sm text-gray-500">/{plan.period}</span>}
                                        </div>
                                        <p className="text-xs text-red-600 font-bold mt-1 bg-red-50 inline-block px-2 py-1 rounded">
                                            初回限定 特別価格
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-center gap-2 text-gray-400 line-through text-sm">
                                            <span>通常価格 ¥20,000</span>
                                        </div>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-sm text-gray-500">月額</span>
                                            <span className="text-4xl font-bold text-red-600">¥{plan.price}</span>
                                            {plan.period && <span className="text-sm text-gray-500">/{plan.period}</span>}
                                        </div>
                                        <p className="text-xs text-red-600 font-bold mt-1 bg-red-50 inline-block px-2 py-1 rounded">
                                            オープン記念 先着10名様限定
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">
                                            ※ 教室でのグループ開催です。講義形式ではなく、各自の課題に取り組みながら講師に質問できるスタイルです。
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={plan.popular ? "cta" : "outline"}
                            className="w-full"
                            asChild
                        >
                            <Link href="#contact">
                                {plan.cta}
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </Section>
    );
}
