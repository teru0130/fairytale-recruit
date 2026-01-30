// /safety - 安全性・身バレ対策

import type { Metadata } from "next";
import { PreApplicationCheck } from "@/components/PreApplicationCheck";
import { PAGE_IDS } from "@/lib/site";

export const metadata: Metadata = {
    title: "安全性・身バレ対策",
    description:
        "チャットレディの安全性と身バレ対策について解説。不安を減らすために知っておきたいポイントをまとめました。",
};

export default function SafetyPage() {
    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* ページタイトル */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        安全性と身バレが不安な方へ
                    </h1>
                    <p className="text-gray-600">
                        不安を減らすには「できること / できないこと」を先に知るのが大切です
                    </p>
                </div>

                {/* 不安が出やすいポイント */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        不安が出やすいポイント
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            {
                                icon: "🔒",
                                title: "身バレ",
                                desc: "知り合いに見つかるのではないかという不安",
                            },
                            {
                                icon: "📋",
                                title: "個人情報",
                                desc: "登録した情報の取り扱いへの不安",
                            },
                            {
                                icon: "🏠",
                                title: "働く環境",
                                desc: "在宅と通勤、どちらが安心かという疑問",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100"
                            >
                                <span className="text-4xl block mb-3">{item.icon}</span>
                                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 一般的に意識したいこと */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        一般的に意識したいこと（参考情報）
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                title: "ニックネームの使用",
                                desc: "本名ではなくニックネームで活動することで、プライベートと切り離すことができます。普段使っているSNSのアカウント名とは別のものを使用するのが一般的です。",
                                icon: "👤",
                            },
                            {
                                title: "背景・映り込みへの配慮",
                                desc: "在宅で作業する場合、背景に個人を特定できるものが映らないよう配慮することが重要です。窓の外の風景、本棚の本、カレンダーなども注意ポイントです。",
                                icon: "📷",
                            },
                            {
                                title: "生活圏の話題に注意",
                                desc: "最寄り駅、よく行くお店、学校や職場など、生活圏が特定されやすい話題は避けるのが一般的なセルフディフェンスです。",
                                icon: "🗣️",
                            },
                            {
                                title: "SNSとの切り離し",
                                desc: "プライベートのSNSアカウントとは完全に切り離して運用することで、リスクを軽減できます。",
                                icon: "📱",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4"
                            >
                                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <p className="text-blue-800 text-sm">
                            <strong>💡 参考情報として：</strong>
                            上記は一般的な対策例です。具体的な運用方法や環境については、面談時に確認することをおすすめします。
                        </p>
                    </div>
                </section>

                {/* 在宅と通勤 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        在宅と通勤の違い
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center gap-2">
                                <span>🏠</span>
                                <span>在宅の場合</span>
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-500">▶</span>
                                    <span>自宅で作業できるため移動の手間がない</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-500">▶</span>
                                    <span>背景や映り込みは自分で管理する必要がある</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-500">▶</span>
                                    <span>通信環境や機材は自分で用意する場合が多い</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-lime-50 border border-lime-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-lime-800 mb-4 flex items-center gap-2">
                                <span>🏢</span>
                                <span>通勤の場合</span>
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-lime-400">▶</span>
                                    <span>専用の環境・機材が用意されている場合が多い</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-lime-400">▶</span>
                                    <span>背景設定などは店舗側で対応している場合がある</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-lime-400">▶</span>
                                    <span>拠点によって環境は異なる</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 text-center">
                        ※詳細は公式サイトの募集要項や面談で確認してください
                    </p>
                </section>

                {/* 応募前チェック + CTA */}
                <section>
                    <PreApplicationCheck
                        pageId={PAGE_IDS.safety}
                        position="bottom"
                        ctaText="公式サイトで詳細を確認する"
                    />
                </section>
            </div>
        </div>
    );
}
