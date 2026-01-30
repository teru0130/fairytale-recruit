// トップページ（LP）

import Link from "next/link";
import { AlertBox } from "@/components/AlertBox";
import { PreApplicationCheck } from "@/components/PreApplicationCheck";
import { PAGE_IDS } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ファーストビュー */}
      <section className="relative bg-gradient-to-br from-lime-50 via-white to-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          {/* キャッチコピー */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
              <span className="text-lime-400">ノンアダルト</span>で始める
              <br className="sm:hidden" />
              チャットレディ
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              安心して始めたい方向けに、応募前に確認すべきポイントを整理しました
            </p>
          </div>

          {/* 重要注意 */}
          <div className="mb-8">
            <AlertBox title="応募前の重要ポイント" variant="important">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span>
                    <strong>WEB応募のみ対象</strong>
                    （LINE応募は対象外となります）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span>
                    <strong>30日以内の面談完了</strong>が条件です
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400 font-bold">✓</span>
                  <span>
                    <strong>顔写真付き身分証</strong>
                    が必要です（免許証/マイナンバー等）
                  </span>
                </li>
              </ul>
            </AlertBox>
          </div>

          {/* 応募前チェック + CTA (FV) */}
          <PreApplicationCheck
            pageId={PAGE_IDS.home}
            position="fv"
            ctaText="公式サイトで募集要項を確認する"
          />
        </div>
      </section>

      {/* こんな人に向いています */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            こんな人に向いています
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "💼",
                title: "副業で収入を増やしたい",
                desc: "スキマ時間を活用して働きたい方",
              },
              {
                icon: "🏠",
                title: "直接会う仕事は避けたい",
                desc: "対面接客に抵抗がある方",
              },
              {
                icon: "💬",
                title: "会話力を身につけたい",
                desc: "未経験から接客スキルを磨きたい方",
              },
              {
                icon: "⏰",
                title: "働き方を選びたい",
                desc: "在宅/通勤など柔軟に働きたい方",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-lime-50 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* フェアリーテイルの特徴 */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            フェアリーテイルの特徴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🛡️",
                title: "ノンアダルト専門",
                desc: "会話中心のコミュニケーションを重視した求人です",
              },
              {
                icon: "✨",
                title: "安心・安全を重視",
                desc: "働く女性の環境づくりに力を入れています",
              },
              {
                icon: "🤝",
                title: "サポート体制",
                desc: "未経験の方へのフォローが用意されています",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            ※詳細は公式サイトの募集要項をご確認ください
          </p>
        </div>
      </section>

      {/* 始め方3ステップ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            始め方3ステップ
          </h2>
          <div className="relative">
            {/* ステップ接続線 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-lime-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {[
                {
                  step: 1,
                  title: "WEB応募",
                  desc: "公式ページからWEB応募（※LINE応募は対象外）",
                },
                {
                  step: 2,
                  title: "連絡・日程調整",
                  desc: "応募後の連絡を見落とさないようにしましょう",
                },
                {
                  step: 3,
                  title: "面談",
                  desc: "応募から30日以内の面談完了が条件です",
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`bg-white p-6 rounded-2xl border-2 text-center ${item.highlight
                    ? "border-lime-300 shadow-lg"
                    : "border-gray-100"
                    }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold ${item.highlight
                      ? "bg-lime-400 text-white"
                      : "bg-lime-100 text-lime-400"
                      }`}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
            <p className="text-amber-800 text-sm">
              <strong>💡 ポイント：</strong>
              応募後は連絡を見落とさないようにするのがおすすめです
            </p>
          </div>
        </div>
      </section>

      {/* よくある不安 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            よくある不安にお答えします
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                question: "身バレは大丈夫？",
                link: "/safety",
                linkText: "安全性について",
              },
              {
                question: "顔出しは必須？",
                link: "/faq",
                linkText: "FAQで確認",
              },
              {
                question: "未経験でも大丈夫？",
                link: "/about-nonadult",
                linkText: "仕事内容を確認",
              },
              {
                question: "必要書類は？",
                link: "/requirements",
                linkText: "応募条件を確認",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-lime-200 hover:shadow-md transition-all group"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.question}</p>
                  <p className="text-sm text-lime-400">{item.linkText} →</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-lime-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 下部CTA */}
      <section className="py-16 bg-gradient-to-br from-lime-300 to-green-400">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              まずは募集要項を確認してみましょう
            </h2>
            <p className="text-lime-50">
              応募条件を満たしているか確認してから、WEB応募へ進みましょう
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <PreApplicationCheck
              pageId={PAGE_IDS.home}
              position="bottom"
              ctaText="公式ページからWEB応募する"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
