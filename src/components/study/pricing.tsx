"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export function StudyPricing() {
    return (
        <Section id="pricing" className="bg-orange-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    参加<span className="text-orange-500">プラン</span>
                </h2>
                <p className="text-gray-600">
                    習い事感覚で、気軽に始められます。
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
                {/* Private Lesson */}
                <div className="relative bg-white rounded-2xl p-8 border border-orange-100 shadow-sm w-full md:w-1/2 max-w-md">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">プライベートレッスン</h3>
                        <p className="text-sm text-gray-500 mb-6">必要な時だけ、ピンポイントで相談したい方へ</p>

                        <div className="mb-6">
                            <div className="flex items-center justify-center gap-2 text-gray-400 line-through text-sm">
                                <span>通常価格 ¥10,000</span>
                            </div>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-sm text-gray-500">1回</span>
                                <span className="text-4xl font-bold text-red-600">¥8,000</span>
                                <span className="text-sm text-gray-500">(60分)</span>
                            </div>
                            <p className="text-xs text-red-600 font-bold mt-1 bg-red-50 inline-block px-2 py-1 rounded">
                                初回限定 特別価格
                            </p>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-orange-500 shrink-0" />
                            <span>1回60分のマンツーマン相談</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-orange-500 shrink-0" />
                            <span>ツールの使い方レクチャー</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-orange-500 shrink-0" />
                            <span>エラー解消・トラブル対応</span>
                        </li>
                    </ul>

                    <Button
                        variant="outline"
                        className="w-full h-12 text-lg"
                        asChild
                    >
                        <Link href="#contact">
                            申し込む
                        </Link>
                    </Button>
                </div>

                {/* Standard Course */}
                <div className="relative bg-white rounded-2xl p-8 border-2 border-orange-500 shadow-xl w-full md:w-1/2 max-w-md scale-105 z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        一番人気
                    </div>

                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">スタンダードコース</h3>
                        <p className="text-sm text-gray-500 mb-4">週1回のペースで着実に進めたい方へ</p>

                        <div className="mb-6">
                            <div className="flex items-center justify-center gap-2 text-gray-400 line-through text-sm">
                                <span>通常価格 ¥20,000</span>
                            </div>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-sm text-gray-500">月額</span>
                                <span className="text-4xl font-bold text-red-600">¥16,000</span>
                            </div>
                            <p className="text-xs text-red-600 font-bold mt-1 bg-red-50 inline-block px-2 py-1 rounded">
                                オープン記念 先着10名様限定
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                                ※ 教室でのグループ開催です。講義形式ではなく、各自の課題に取り組みながら講師に質問できるスタイルです。
                            </p>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-orange-500 shrink-0" />
                            <span>月4回 オフライン相談 (各60分)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-orange-500 shrink-0" />
                            <span>実装サポート (HP/予約/決済)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-orange-500 shrink-0" />
                            <span>技術レビュー・セキュリティチェック</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-orange-500 shrink-0" />
                            <span>AIプロンプト詳細指導</span>
                        </li>
                    </ul>

                    <Button
                        variant="cta"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg"
                        asChild
                    >
                        <Link href="#contact">
                            まずは無料相談
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
