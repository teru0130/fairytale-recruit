// /requirements - 応募条件・必要書類（否認対策の中心ページ）

import type { Metadata } from "next";
import { AlertBox } from "@/components/AlertBox";
import { PreApplicationCheck } from "@/components/PreApplicationCheck";
import {
    PAGE_IDS,
    ID_DOCUMENTS,
    DENIAL_CONDITIONS,
    SUCCESS_CONDITIONS,
} from "@/lib/site";

export const metadata: Metadata = {
    title: "応募条件・必要書類",
    description:
        "ノンアダルトチャットレディの応募条件と必要書類を詳しく解説。否認を防ぐために事前に確認すべきポイントをまとめました。",
};

export default function RequirementsPage() {
    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* ページタイトル */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        応募条件と必要書類
                    </h1>
                    <p className="text-gray-600">
                        否認を防ぐために、事前に確認しましょう
                    </p>
                </div>

                {/* 重要注意 */}
                <div className="mb-8">
                    <AlertBox title="応募前に必ず確認してください" variant="warning">
                        <p>
                            対象外や不備があると、応募が進められない、または成果対象外となる可能性があります。
                            以下の条件を満たしているか、必ず事前にご確認ください。
                        </p>
                    </AlertBox>
                </div>

                {/* 成果条件 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-400">
                            ✓
                        </span>
                        対象条件（満たす必要があります）
                    </h2>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-green-400 text-white flex items-center justify-center flex-shrink-0 text-sm">
                                    1
                                </span>
                                <div>
                                    <p className="font-medium text-gray-800">
                                        {SUCCESS_CONDITIONS.target}
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-green-400 text-white flex items-center justify-center flex-shrink-0 text-sm">
                                    2
                                </span>
                                <div>
                                    <p className="font-medium text-gray-800">
                                        {SUCCESS_CONDITIONS.requirement}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        過去にフェアリーテイルを利用したことがある方は対象外です
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-green-400 text-white flex items-center justify-center flex-shrink-0 text-sm">
                                    3
                                </span>
                                <div>
                                    <p className="font-medium text-gray-800">
                                        {SUCCESS_CONDITIONS.deadline}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        応募後は連絡を見落とさず、早めに面談日程を調整しましょう
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 否認条件 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                            ✕
                        </span>
                        対象外になる条件（否認条件）
                    </h2>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <ul className="space-y-3">
                            {DENIAL_CONDITIONS.map((condition, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">✕</span>
                                    <span className="text-gray-800">{condition}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                        <p className="text-amber-800 text-sm">
                            <strong>⚠️ 特に注意：</strong>
                            <span className="font-bold">LINE応募は対象外</span>
                            です。必ず公式ページからWEB応募してください。
                        </p>
                    </div>
                </section>

                {/* 必要書類 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            📄
                        </span>
                        顔写真付き身分証（いずれか1点）
                    </h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {ID_DOCUMENTS.map((doc, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-blue-500">▶</span>
                                    <span className="text-gray-800">{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        ※登録可否の詳細は公式サイトの案内をご確認ください
                    </p>
                </section>

                {/* 応募前チェック + CTA */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        条件を確認して応募する
                    </h2>
                    <PreApplicationCheck
                        pageId={PAGE_IDS.requirements}
                        position="bottom"
                        ctaText="公式ページからWEB応募する"
                    />
                </section>
            </div>
        </div>
    );
}
