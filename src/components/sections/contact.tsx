"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Note: In a real application, you would use a Server Action or an API route.
    // For a static LP, services like Formspree are easiest.
    // Replace "YOUR_FORM_ID" with your actual Formspree Form ID.
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission for demo
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("送信機能はまだ未実装です。Formspreeなどのサービスと連携する必要があります。");
        setIsSubmitting(false);
    }

    return (
        <Section id="contact" className="bg-gray-50">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        無料相談のお申し込み
                    </h2>
                    <p className="text-gray-600">
                        あなたのビジネスについて、少しだけ教えてください。<br />
                        いただいた内容をもとに、具体的な活用法をメールにてご提案します。
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-gray-900">
                                お名前 <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="山田 太郎"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-gray-900">
                                メールアドレス <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="taro@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="business" className="text-sm font-bold text-gray-900">
                                事業内容 <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="business"
                                name="business"
                                placeholder="例：仙台で美容室を経営、ハンドメイド雑貨の販売など"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-gray-900">
                                相談したい内容・悩み
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="例：HPを自分で作りたい、予約対応を自動化したい、など"
                                className="h-32"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="cta"
                            className="w-full text-lg h-12"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "送信中..." : "メールで相談する"}
                        </Button>

                        <p className="text-xs text-center text-gray-500 mt-4">
                            ※ 無理な勧誘は一切行いませんのでご安心ください。
                        </p>
                    </form>
                </div>
            </div>
        </Section>
    );
}
