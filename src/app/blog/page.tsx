// /blog - 記事一覧ページ（空）

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "ブログ・お役立ち情報",
    description:
        "ノンアダルトチャットレディに関するお役立ち情報を発信しています。",
};

// 将来的に記事データを追加する場所
const posts: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
}[] = [];

export default function BlogPage() {
    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* ページタイトル */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ブログ・お役立ち情報
                    </h1>
                    <p className="text-gray-600">
                        ノンアダルトチャットレディに関する情報を発信しています
                    </p>
                </div>

                {/* 記事一覧 */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-lime-200 transition-all"
                            >
                                <time className="text-sm text-gray-500">{post.date}</time>
                                <h2 className="text-lg font-bold text-gray-800 mt-2 mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-600">{post.excerpt}</p>
                                <span className="inline-block mt-3 text-lime-400 text-sm font-medium">
                                    続きを読む →
                                </span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-gray-50 rounded-xl">
                        <p className="text-gray-500 mb-4">
                            記事は準備中です。もうしばらくお待ちください。
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-500"
                        >
                            <span>←</span>
                            <span>トップページに戻る</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
