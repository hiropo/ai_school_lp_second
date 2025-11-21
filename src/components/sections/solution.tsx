"use client";

import { Section } from "@/components/ui/section";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function Solution() {
    return (
        <Section id="solution" className="bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 space-y-8">
                    <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                        解決策
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        AI × 伴走サポートで<br />
                        <span className="text-primary">「自分でできる」</span>を実現
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        高額な外注も、孤独な独学も必要ありません。<br />
                        最新のAIツールと、経験豊富なサポーターがあなたの隣で伴走します。<br />
                        まるで「専属のIT担当者」がいるような安心感で、あなたのビジネスをオンライン化します。
                    </p>

                    <div className="space-y-4">
                        {[
                            "専門知識不要！チャットで指示するだけ",
                            "最短1日で予約システムが完成",
                            "維持費はツールの実費のみ（月額数千円〜）",
                            "困ったときはいつでもチャットで相談",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-800 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 relative w-full max-w-md lg:max-w-none">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />

                    <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                    👤
                                </div>
                                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 text-sm text-gray-800">
                                    予約システムを作りたいけど、何から始めればいいかわかりません...
                                </div>
                            </div>

                            <div className="flex items-start gap-4 flex-row-reverse">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    🤖
                                </div>
                                <div className="bg-primary/10 rounded-2xl rounded-tr-none p-4 text-sm text-gray-800">
                                    お任せください！まずは業種と希望する予約メニューを教えていただけますか？最適なテンプレートを提案しますね。
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                    👤
                                </div>
                                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 text-sm text-gray-800">
                                    美容室です。カットとカラーのメニューがあります。
                                </div>
                            </div>

                            <div className="flex items-start gap-4 flex-row-reverse">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    🤖
                                </div>
                                <div className="bg-primary/10 rounded-2xl rounded-tr-none p-4 text-sm text-gray-800">
                                    承知しました。では、以下のステップで進めましょう...
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
                            実際のサポートイメージ
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
