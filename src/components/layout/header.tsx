"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "悩み", href: "#pain-points" },
        { name: "特徴", href: "#features" },
        { name: "事例", href: "#use-cases" },
        { name: "料金", href: "#pricing" },
        { name: "大人のパソコンAI教室", href: "/study", highlight: true },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
                    <span className="bg-primary text-white p-1 rounded-md">AI</span>
                    <span>伴走サポート</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${item.highlight
                                ? "text-orange-500 font-bold bg-orange-50 px-3 py-1 rounded-full"
                                : "text-gray-600 hover:text-primary"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="cta" size="sm" asChild>
                        <Link href="#contact">
                            無料相談を予約
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-base font-medium text-gray-600 py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button variant="cta" className="w-full" asChild>
                                <Link href="#contact">
                                    無料相談を予約
                                </Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
