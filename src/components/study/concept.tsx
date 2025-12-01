"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Bot, Users, Zap } from "lucide-react";

export function StudyConcept() {
    return (
        <Section className="bg-orange-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        ここは、<br />
                        <span className="text-orange-500">「実務で使える」</span>を学ぶ場所です。
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        難しいプログラミング言語を暗記する必要はありません。<br />
                        AIを使って、目の前の仕事をどう効率化するか。その具体的な方法を学びます。
                    </p>
                </div>

                <div className="grid gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-blue-600">
                            <Bot size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">AIがあなたの専属アシスタント</h3>
                            <p className="text-gray-600">
                                「この表を整理して」「この計算式を教えて」とAIに頼むだけ。<br />
                                AIへの上手な指示の出し方（プロンプト）を習得すれば、仕事のスピードが劇的に変わります。
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
                            <Zap size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">カリキュラムなし。いきなり実践。</h3>
                            <p className="text-gray-600">
                                「Hello World」から始める退屈な学習はしません。<br />
                                「業務効率化ツール」「家計簿アプリ」「推し活サイト」など、作りたいものから作り始めます。
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shrink-0 text-orange-500">
                            <Users size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">オフラインの「部室」のような空間</h3>
                            <p className="text-gray-600">
                                仙台駅周辺のスペースで、週に一度集まります。<br />
                                黙々と作業するもよし、お互いに教え合うもよし。一人じゃないから、続けられます。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
