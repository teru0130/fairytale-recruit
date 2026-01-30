// ヘッダーコンポーネント

import Link from "next/link";

const navLinks = [
    { href: "/about-nonadult", label: "ノンアダルトとは" },
    { href: "/safety", label: "安全性" },
    { href: "/how-to-start", label: "始め方" },
    { href: "/requirements", label: "応募条件" },
    { href: "/faq", label: "FAQ" },
];

export function Header() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* ロゴ */}
                    <Link
                        href="/"
                        className="font-bold text-lg md:text-xl text-gray-800 hover:text-lime-500 transition-colors"
                    >
                        <span className="text-lime-400">♦</span> ノンアダルト求人ガイド
                    </Link>

                    {/* デスクトップナビ */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-lime-500 transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* モバイルメニューボタン（シンプル版） */}
                    <div className="md:hidden">
                        <Link
                            href="/requirements"
                            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-lime-400 rounded-lg hover:bg-lime-500 transition-colors"
                        >
                            応募条件
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
