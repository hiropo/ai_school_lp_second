"use client";

import { Section } from "@/components/ui/section";

export function Profile() {
    return (
        <Section className="bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        講師プロフィール
                    </h2>
                    <p className="text-gray-600">
                        東京の最新技術を、仙台の言葉でわかりやすく。
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                山形出身・仙台在住の現役プロダクトマネージャー
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    現在は東京の大手IT企業に勤めながら、生活と仕事の拠点は仙台に置いています。
                                    仙台で暮らしながら働くからこそ、東北の方に寄り添ったAIレッスンを提供したいと思っています。
                                </p>
                                <p>
                                    元エンジニア（3年）としての技術的背景と、8年以上のプロダクト開発・業務改善の実務経験、そして最新のAI（ChatGPT/Cursor）活用ノウハウを活かし、
                                    <span className="font-bold text-blue-600">「非エンジニアでも短期間でWebサイトを作れるようになる」</span>
                                    実践的な指導を行っています。
                                </p>
                                <p>
                                    「専門用語を使わない」「隣で一緒に考える」がモットー。
                                    地元・東北のスポーツ観戦が趣味で、同じ東北で挑戦する皆様の「作りたい」「変えたい」を全力で応援します。
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg mt-6 border border-blue-100">
                                    <p className="font-bold text-center text-blue-900">
                                        「難しいことはAIに任せて、一緒に新しい一歩を踏み出しましょう！」
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
