// /how-to-start - 始め方・面談までの流れ

import type { Metadata } from "next";
import { AlertBox } from "@/components/AlertBox";
import { PreApplicationCheck } from "@/components/PreApplicationCheck";
import { PAGE_IDS } from "@/lib/site";

export const metadata: Metadata = {
    title: "始め方・面談までの流れ",
    description:
        "WEB応募から面談までの流れを解説。30日以内の面談完了が条件なので、スムーズに進めるためのポイントをまとめました。",
};

export default function HowToStartPage() {
    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* ページタイトル */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        WEB応募から面談までの流れ
                    </h1>
                    <p className="text-gray-600">
                        30日以内の面談完了が条件です
                    </p>
                </div>

                {/* 重要注意 */}
                <div className="mb-8">
                    <AlertBox title="30日以内の面談完了が必要です" variant="important">
                        <p>
                            成果条件の関係で、<strong>WEB応募完了後30日以内に面談を完了</strong>
                            する必要があります。応募後は連絡を見落とさないようにしましょう。
                        </p>
                    </AlertBox>
                </div>

                {/* ステップ */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                        面談までの4ステップ
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                step: 1,
                                title: "公式ページからWEB応募",
                                desc: "公式サイトの応募フォームから必要事項を入力して送信します。",
                                notes: [
                                    "LINE応募は対象外です。必ずWEB応募をしてください",
                                    "入力内容に不備がないよう正確に入力してください",
                                ],
                                highlight: false,
                            },
                            {
                                step: 2,
                                title: "連絡を受け取る",
                                desc: "応募後、担当者から連絡があります。見落とさないようにしましょう。",
                                notes: [
                                    "メールや電話の通知設定を確認しておきましょう",
                                    "迷惑メールフォルダも確認してください",
                                ],
                                highlight: false,
                            },
                            {
                                step: 3,
                                title: "日程調整・面談準備",
                                desc: "面談の日程を調整し、必要書類を準備します。",
                                notes: [
                                    "顔写真付き身分証を用意してください",
                                    "早めの日程で調整するのがおすすめです",
                                ],
                                highlight: false,
                            },
                            {
                                step: 4,
                                title: "面談完了",
                                desc: "面談を受けて完了です。応募から30日以内に完了させましょう。",
                                notes: [
                                    "30日以内の面談完了が条件となります",
                                    "詳細は公式案内に従ってください",
                                ],
                                highlight: true,
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className={`relative pl-16 pb-6 ${item.step < 4
                                    ? 'before:absolute before:left-6 before:top-12 before:bottom-0 before:w-0.5 before:bg-lime-200'
                                    : ''
                                    }`}
                            >
                                <div
                                    className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${item.highlight
                                        ? 'bg-lime-400 text-white'
                                        : 'bg-lime-100 text-lime-400'
                                        }`}
                                >
                                    {item.step}
                                </div>
                                <div
                                    className={`p-6 rounded-xl ${item.highlight
                                        ? 'bg-lime-50 border-2 border-lime-300'
                                        : 'bg-gray-50 border border-gray-200'
                                        }`}
                                >
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-3">{item.desc}</p>
                                    <ul className="space-y-1">
                                        {item.notes.map((note, index) => (
                                            <li
                                                key={index}
                                                className="text-sm text-gray-500 flex items-start gap-2"
                                            >
                                                <span className="text-lime-400">•</span>
                                                <span>{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 30日以内に面談を完了するコツ */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        30日以内に面談を完了するコツ
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            {
                                icon: "📱",
                                title: "連絡にすぐ反応",
                                desc: "応募後の連絡は見落とさず、できるだけ早く返信しましょう",
                            },
                            {
                                icon: "📄",
                                title: "身分証を先に準備",
                                desc: "顔写真付き身分証を事前に用意しておくとスムーズです",
                            },
                            {
                                icon: "🗓️",
                                title: "早めに日程調整",
                                desc: "予定が読めない場合は、早めに相談するのがおすすめです",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-4 text-center"
                            >
                                <span className="text-3xl block mb-2">{item.icon}</span>
                                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 応募前チェック + CTA */}
                <section>
                    <PreApplicationCheck
                        pageId={PAGE_IDS.howToStart}
                        position="bottom"
                        ctaText="公式ページからWEB応募する"
                    />
                </section>
            </div>
        </div>
    );
}
