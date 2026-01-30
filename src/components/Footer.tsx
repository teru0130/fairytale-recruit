// フッターコンポーネント

import Link from "next/link";

const footerLinks = [
    {
        title: "コンテンツ",
        links: [
            { href: "/about-nonadult", label: "ノンアダルトとは" },
            { href: "/safety", label: "安全性・身バレ対策" },
            { href: "/how-to-start", label: "始め方・面談まで" },
            { href: "/requirements", label: "応募条件・必要書類" },
            { href: "/faq", label: "よくある質問" },
        ],
    },
    {
        title: "サイト情報",
        links: [
            { href: "/legal", label: "運営者情報" },
            { href: "/legal#disclaimer", label: "免責事項" },
            { href: "/legal#privacy", label: "プライバシーポリシー" },
        ],
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* サイト説明 */}
                    <div className="md:col-span-1">
                        <Link
                            href="/"
                            className="font-bold text-lg text-gray-800 hover:text-lime-500 transition-colors"
                        >
                            <span className="text-lime-400">♦</span> ノンアダルト求人ガイド
                        </Link>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            ノンアダルト専門のチャットレディ求人情報を紹介しています。
                            安心して始めたい方向けに、応募前に確認すべきポイントを整理しました。
                        </p>
                        <p className="mt-3 text-xs text-gray-500">
                            ※当サイトはアフィリエイト広告を利用しています
                        </p>
                    </div>

                    {/* リンク */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-gray-800 mb-3">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-600 hover:text-lime-500 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* コピーライト */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-500">
                        © {currentYear} ノンアダルト求人ガイド. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
