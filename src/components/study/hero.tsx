"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Hammer, Laptop, Users } from "lucide-react";

export function StudyHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-orange-50/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-orange-100">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-gray-600">
                                仙台駅前の「大人のパソコンAI教室」
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] mb-6">
                            <span className="text-orange-500">AI</span>で、<br />
                            毎日の仕事をラクにする。
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            エクセルの関数がわからない、単純作業を自動化したい...<br />
                            そんな悩みも、AIを使えばすぐに解決できます。<br />
                            「パソコンが苦手」な方のための、<br className="hidden md:block" />
                            実践的なAI・パソコン教室です。
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <Button variant="cta" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white" asChild>
                                <Link href="#contact">
                                    まずは無料相談へ
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-orange-500" />
                                <span>仲間ができる</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Laptop className="w-5 h-5 text-orange-500" />
                                <span>PC一台でOK</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Hammer className="w-5 h-5 text-orange-500" />
                                <span>実践中心</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg lg:max-w-none"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-3xl blur-2xl opacity-70" />
                            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-orange-100 bg-white aspect-video flex items-center justify-center">
                                <img
                                    src="/images/hero.png"
                                    alt="パソコン教室の様子"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
