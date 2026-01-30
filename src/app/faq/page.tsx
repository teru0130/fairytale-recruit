// /faq - よくある質問（20問）

import type { Metadata } from "next";
import { PreApplicationCheck } from "@/components/PreApplicationCheck";
import { PAGE_IDS } from "@/lib/site";

export const metadata: Metadata = {
    title: "よくある質問（FAQ）",
    description:
        "ノンアダルトチャットレディに関するよくある質問20問にお答えします。応募条件、仕事内容、収入など気になる疑問を解決。",
};

const faqs = [
    {
        q: "未経験でも応募できますか？",
        a: "未経験向けの案内がある場合が多いので、公式ページの募集要項をご確認ください。",
    },
    {
        q: "ノンアダルトとは具体的に何をしないの？",
        a: "仕事内容の範囲は募集要項に明記されます。事前に確認して不安を減らしましょう。",
    },
    {
        q: "在宅でもできますか？",
        a: "在宅/通勤など働き方は条件により異なります。公式ページで確認してください。",
    },
    {
        q: "通勤の場合、どんな環境ですか？",
        a: "店舗や設備は拠点によって異なります。面談で確認するのがおすすめです。",
    },
    {
        q: "顔出しは必要ですか？",
        a: "条件はケースにより異なるため、公式案内で確認しましょう。",
    },
    {
        q: "身バレが不安です。対策はありますか？",
        a: "運用上の工夫（映り込み/話題など）でリスクを下げられる場合があります。詳細は面談で相談を。",
    },
    {
        q: "どんな身分証が必要ですか？",
        a: "顔写真付き身分証が必要です（免許証/マイナンバー/パスポート等）。",
    },
    {
        q: "身分証が用意できない場合は？",
        a: "対象外となる可能性があります。まずは用意できるか確認してください。",
    },
    {
        q: "応募はLINEでもできますか？",
        a: "この案件はWEB応募が条件です（LINE申込は対象外となります）。",
    },
    {
        q: "応募後は何をすればいいですか？",
        a: "連絡を見落とさず、日程調整を早めに進めるのがおすすめです。",
    },
    {
        q: "面談はいつまでに受ければいい？",
        a: "WEB応募後30日以内の面談完了が条件です。",
    },
    {
        q: "面談で必要なものは？",
        a: "身分証など。詳細は連絡時の案内に従ってください。",
    },
    {
        q: "外国籍でも応募できますか？",
        a: "この案件では対象外となります。",
    },
    {
        q: "障害者手帳を持っています。応募できますか？",
        a: "この案件では対象外となります。",
    },
    {
        q: "応募フォームに不備があるとどうなりますか？",
        a: "成果対象外になり得ます。正確に入力してください。",
    },
    {
        q: "どのくらいの時間からできますか？",
        a: "働き方は人それぞれです。無理のない範囲で相談しましょう。",
    },
    {
        q: "副業として始められますか？",
        a: "副業で検討する方もいます。条件は公式ページで確認してください。",
    },
    {
        q: "収入はどれくらいですか？",
        a: "個人差が大きいので、具体的な金額は断定できません。公式案内を確認してください。",
    },
    {
        q: "相談やサポートはありますか？",
        a: "サポート体制は拠点や条件で異なります。公式で確認しましょう。",
    },
    {
        q: "応募前に確認すべきことは？",
        a: "対象条件・身分証・WEB応募（LINE不可）・30日以内面談の4点です。",
    },
];

export default function FAQPage() {
    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* ページタイトル */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        よくある質問
                    </h1>
                    <p className="text-gray-600">
                        応募前に気になる疑問にお答えします（全{faqs.length}問）
                    </p>
                </div>

                {/* FAQ一覧 */}
                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <summary className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-100 text-lime-400 flex items-center justify-center text-sm font-bold">
                                    Q{index + 1}
                                </span>
                                <span className="flex-1 font-medium text-gray-800">
                                    {faq.q}
                                </span>
                                <svg
                                    className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>
                            <div className="px-4 pb-4">
                                <div className="pl-12 pt-2 border-t border-gray-100">
                                    <p className="text-gray-600">{faq.a}</p>
                                    <p className="text-xs text-gray-400 mt-2">
                                        ※詳細は公式サイトでご確認ください
                                    </p>
                                </div>
                            </div>
                        </details>
                    ))}
                </div>

                {/* 応募前チェック + CTA */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                        疑問が解決したら応募条件を確認
                    </h2>
                    <PreApplicationCheck
                        pageId={PAGE_IDS.faq}
                        position="bottom"
                        ctaText="公式ページからWEB応募する"
                    />
                </section>
            </div>
        </div>
    );
}
