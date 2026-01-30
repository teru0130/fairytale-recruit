// /blog/[slug] - 記事詳細ページテンプレート

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PreApplicationCheck } from "@/components/PreApplicationCheck";
import { PAGE_IDS } from "@/lib/site";

// 記事データ（将来的にここに追加）
// Static export時に少なくとも1つのページが必要
const posts: Record<
    string,
    {
        title: string;
        content: string;
        date: string;
    }
> = {
    "getting-started": {
        title: "ノンアダルトチャットレディを始める前に知っておきたいこと",
        content: "ノンアダルトチャットレディに興味がある方向けに、始める前に確認しておきたいポイントをまとめました。応募条件、必要書類、面談までの流れなど、基本的な情報を整理しています。詳しくは各ページをご確認ください。",
        date: "2024年1月",
    },
};

// Static export用設定
export const dynamicParams = false;

// Static export用：generateStaticParams
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return Object.keys(posts).map((slug) => ({
        slug,
    }));
}

// メタデータ生成
export function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Metadata {
    const post = posts[params.slug];
    if (!post) {
        return {
            title: "記事が見つかりません",
        };
    }
    return {
        title: post.title,
        description: post.content.slice(0, 160),
    };
}

export default function BlogPostPage({
    params,
}: {
    params: { slug: string };
}) {
    const post = posts[params.slug];

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4">
                {/* パンくずリスト */}
                <nav className="mb-8">
                    <ol className="flex items-center gap-2 text-sm text-gray-500">
                        <li>
                            <Link href="/" className="hover:text-lime-400">
                                トップ
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/blog" className="hover:text-lime-500">
                                ブログ
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-gray-800">{post.title}</li>
                    </ol>
                </nav>

                {/* 記事ヘッダー */}
                <header className="mb-8">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                        {post.title}
                    </h1>
                </header>

                {/* 記事本文 */}
                <article className="prose prose-gray max-w-none mb-12">
                    <p>{post.content}</p>
                </article>

                {/* 応募前チェック + CTA */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                        応募を検討している方へ
                    </h2>
                    <PreApplicationCheck
                        pageId={PAGE_IDS.blog}
                        position="bottom"
                        ctaText="公式ページからWEB応募する"
                    />
                </section>

                {/* 戻るリンク */}
                <div className="mt-8 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-500"
                    >
                        <span>←</span>
                        <span>記事一覧に戻る</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
