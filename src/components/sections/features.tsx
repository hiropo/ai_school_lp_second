"use client";

import { Section } from "@/components/ui/section";
import {
    Layout,
    Calendar,
    CreditCard,
    Users,
    MessageSquare,
    Mail
} from "lucide-react";

const features = [
    {
        icon: Layout,
        title: "HP・LP制作",
        description: "スマホ対応の美しいホームページやランディングページを、AIと一緒に作成します。",
    },
    {
        icon: Calendar,
        title: "予約システム",
        description: "24時間365日、自動で予約を受け付け。Googleカレンダーとも連携可能です。",
    },
    {
        icon: CreditCard,
        title: "オンライン決済",
        description: "クレジットカード決済を導入し、事前決済や継続課金（サブスク）も実現します。",
    },
    {
        icon: Users,
        title: "顧客管理",
        description: "お客様の情報を一元管理。過去の履歴や好みを把握し、サービスの質を向上させます。",
    },
    {
        icon: MessageSquare,
        title: "AIチャットボット",
        description: "よくある質問に自動で回答。夜間や休日のお問い合わせにも即座に対応します。",
    },
    {
        icon: Mail,
        title: "メール配信",
        description: "ステップメールやメルマガ配信を自動化し、リピート率をアップさせます。",
    },
];

export function Features() {
    return (
        <Section id="features" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ビジネスに必要な<span className="text-primary">すべて</span>を<br className="md:hidden" />
                    あなたの手で
                </h2>
                <p className="text-gray-600">
                    これらすべてを、外注せずに自分で構築・運用できるようになります。
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-6">
                            <feature.icon size={24} />
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
