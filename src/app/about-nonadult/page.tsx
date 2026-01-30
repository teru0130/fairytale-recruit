// /about-nonadult - ノンアダルトとは

import type { Metadata } from "next";
import { PreApplicationCheck } from "@/components/PreApplicationCheck";
import { PAGE_IDS } from "@/lib/site";

export const metadata: Metadata = {
    title: "ノンアダルトのチャットレディとは",
    description:
        "ノンアダルトのチャットレディとは何か、仕事内容や向いている人について解説します。",
};

export default function AboutNonadultPage() {
    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* ページタイトル */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        ノンアダルトのチャットレディとは？
                    </h1>
                    <p className="text-gray-600">
                        「ノンアダルト」として働くイメージを、誤解がないように整理します
                    </p>
                </div>

                {/* 仕事内容 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="text-lime-400">💬</span>
                        仕事内容は「会話・コミュニケーション」が中心
                    </h2>
                    <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-6 border border-lime-100">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            ノンアダルトのチャットレディは、画面越しにお客さんと会話をするお仕事です。
                            対面ではなくオンラインでのコミュニケーションが中心となります。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            接客業に近いイメージで、話を聞いたり、会話を楽しんだりすることがメインです。
                            コミュニケーション力を活かせる仕事と言えます。
                        </p>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <p className="text-gray-600 text-sm">
                            ※具体的な仕事内容の範囲は募集要項に明記されます。事前に公式サイトで確認してください。
                        </p>
                    </div>
                </section>

                {/* 向いている人・向いていない人 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        向いている人・向いていない人
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* 向いている人 */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                                <span>😊</span>
                                <span>向いている人</span>
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "話すのが好き、おしゃべりが得意",
                                    "聞き上手だと言われる",
                                    "スキマ時間を有効活用したい",
                                    "コミュニケーション力を磨きたい",
                                    "自分のペースで働きたい",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm">
                                        <span className="text-green-400 font-bold">✓</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 向いていない人 */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                                <span>🤔</span>
                                <span>向いていないかもしれない人</span>
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "継続的に取り組むのが苦手",
                                    "人とのやり取り自体に強い抵抗がある",
                                    "画面越しでも緊張してしまう",
                                    "時間の管理が難しい",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm">
                                        <span className="text-gray-400">-</span>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-gray-500">
                                ※あくまで参考です。実際に始めてみて合うかどうかは人それぞれです
                            </p>
                        </div>
                    </div>
                </section>

                {/* 始める前に知っておきたいこと */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        まずは公式募集要項を確認するのがおすすめ
                    </h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            「ノンアダルト」の具体的な範囲や条件は、募集要項に明記されています。
                            不安がある方は、まず公式サイトの情報を確認してから判断することをおすすめします。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            面談では詳しい説明を受けることができるので、疑問点があれば質問することもできます。
                        </p>
                    </div>
                </section>

                {/* 応募前チェック + CTA */}
                <section>
                    <PreApplicationCheck
                        pageId={PAGE_IDS.aboutNonadult}
                        position="bottom"
                        ctaText="公式サイトで募集要項を確認する"
                    />
                </section>
            </div>
        </div>
    );
}
