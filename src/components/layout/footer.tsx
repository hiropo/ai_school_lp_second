import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-xl font-bold flex items-center gap-2 mb-4">
                            <span className="bg-primary text-white p-1 rounded-md">AI</span>
                            <span>伴走サポート</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            個人事業主・副業・起業準備中の方の「自分でやりたい」を叶える、AI活用型伴走支援サービス。
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">サービス</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#features" className="hover:text-primary">特徴</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary">料金プラン</Link></li>
                            <li><Link href="#use-cases" className="hover:text-primary">活用事例</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">お問い合わせ</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#contact" className="hover:text-primary">無料相談予約</Link></li>
                            <li><Link href="#" className="hover:text-primary">お問い合わせ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} AI Accompaniment Support. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
