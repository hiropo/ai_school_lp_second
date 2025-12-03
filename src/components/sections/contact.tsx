"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
    // Replace "YOUR_FORM_ID" with your actual Formspree Form ID
    // You can get one for free at https://formspree.io/
    const [state, handleSubmit] = useForm("meoygkjw");

    if (state.succeeded) {
        return (
            <Section id="contact" className="bg-gray-50">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            送信ありがとうございます！
                        </h2>
                        <p className="text-gray-600 mb-8">
                            お問い合わせ内容を受け付けました。<br />
                            確認次第、担当者よりメールにてご連絡させていただきます。
                        </p>
                        <Button variant="outline" asChild>
                            <a href="/">トップページに戻る</a>
                        </Button>
                    </div>
                </div>
            </Section>
        );
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
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                                className="text-red-500 text-sm"
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
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-500 text-sm"
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
                            <ValidationError
                                prefix="Business"
                                field="business"
                                errors={state.errors}
                                className="text-red-500 text-sm"
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
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="cta"
                            className="w-full text-lg h-12"
                            disabled={state.submitting}
                        >
                            {state.submitting ? "送信中..." : "メールで相談する"}
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
