"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "ライトプラン",
        price: "15,000",
        description: "まずは相談しながら少しずつ進めたい方へ",
        features: [
            "月1回 オンライン相談 (60分)",
            "チャットサポート",
            "ツール選定アドバイス",
            "AI活用基礎レクチャー",
        ],
        cta: "申し込む",
        variant: "outline" as const,
    },
    {
        name: "伴走プラン",
        price: "40,000",
        description: "最短で成果を出したい方への推奨プラン",
        popular: true,
        features: [
            "週1回 オンライン相談 (60分)",
            "チャットサポート無制限",
            "実装サポート (HP/予約/決済)",
            "技術レビュー・セキュリティチェック",
            "AIプロンプト詳細指導",
        ],
        cta: "まずは無料相談",
        variant: "default" as const,
    },
    {
        name: "フル伴走プラン",
        price: "198,000",
        period: "3ヶ月〜",
        description: "企画から公開まで全面的にバックアップ",
        features: [
            "週2回 オンライン相談",
            "優先サポート対応",
            "企画・設計の代行サポート",
            "公開後の運用サポート",
            "全機能の実装支援",
        ],
        cta: "お問い合わせ",
        variant: "outline" as const,
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

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative bg-white rounded-2xl p-8 border ${plan.popular
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
                            <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-sm text-gray-500">月額</span>
                                <span className="text-4xl font-bold text-gray-900">¥{plan.price}</span>
                                {plan.period && <span className="text-sm text-gray-500">/{plan.period}</span>}
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
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf..." target="_blank">
                                {plan.cta}
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <div className="inline-block bg-white p-6 rounded-xl border border-gray-100 shadow-sm max-w-2xl">
                    <h4 className="font-bold text-lg mb-2">仙台エリア限定：オフライン講座</h4>
                    <p className="text-gray-600 mb-4">
                        対面でじっくり教わりたい方向けに、仙台駅周辺のコワーキングスペースでの出張講座も行っています。
                    </p>
                    <div className="text-primary font-bold text-xl">
                        2時間 ¥5,000〜
                    </div>
                </div>
            </div>
        </Section>
    );
}
