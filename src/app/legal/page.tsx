// /legal - 運営者情報・免責・プライバシーポリシー

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "運営者情報・免責事項・プライバシーポリシー",
    description:
        "当サイトの運営者情報、免責事項、プライバシーポリシー、広告表記について。",
};

export default function LegalPage() {
    return (
        <div className="bg-white py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4">
                {/* ページタイトル */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        運営者情報
                    </h1>
                </div>

                {/* 運営者情報 */}
                <section className="mb-12">
                    <h2
                        id="operator"
                        className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200"
                    >
                        運営者情報
                    </h2>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <table className="w-full text-sm">
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 pr-4 text-gray-600 font-medium w-1/3">
                                        運営者
                                    </th>
                                    <td className="py-3 text-gray-800">
                                        ノンアダルト求人ガイド運営事務局
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-left py-3 pr-4 text-gray-600 font-medium">
                                        お問い合わせ
                                    </th>
                                    <td className="py-3 text-gray-800">
                                        お問い合わせフォームよりご連絡ください
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 免責事項 */}
                <section className="mb-12">
                    <h2
                        id="disclaimer"
                        className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200"
                    >
                        免責事項
                    </h2>
                    <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-4">
                        <p>
                            当サイトに掲載されている情報は、可能な限り正確な情報を掲載するよう努めておりますが、
                            必ずしもその正確性・最新性を保証するものではありません。
                        </p>
                        <p>
                            当サイトの情報を利用することで生じた損害について、当サイト運営者は一切の責任を負いません。
                        </p>
                        <p>
                            掲載情報は参考としてご覧いただき、
                            <strong>最新・正確な情報は必ず公式サイトでご確認ください</strong>。
                        </p>
                        <p>
                            当サイトでは、収入・報酬等の結果を保証するものではありません。
                            収入は個人の状況や努力により大きく異なります。
                        </p>
                        <p>
                            当サイトからリンクされた外部サイトについて、その内容について責任を負うものではありません。
                        </p>
                    </div>
                </section>

                {/* プライバシーポリシー */}
                <section className="mb-12">
                    <h2
                        id="privacy"
                        className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200"
                    >
                        プライバシーポリシー
                    </h2>
                    <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-4">
                        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
                            個人情報の収集について
                        </h3>
                        <p>
                            当サイトでは、応募情報や個人情報を直接収集することはありません。
                            応募は公式サイトを通じて行われ、個人情報の取り扱いは当該サービス提供者の規約に従います。
                        </p>

                        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
                            アクセス解析について
                        </h3>
                        <p>
                            当サイトでは、Googleアナリティクス等のアクセス解析ツールを使用する場合があります。
                            これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
                            Googleアナリティクスの利用規約については、Googleの公式サイトをご確認ください。
                        </p>

                        <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">
                            Cookieの使用について
                        </h3>
                        <p>
                            当サイトでは、サイトの利便性向上やアクセス解析のためにCookieを使用する場合があります。
                            ブラウザの設定によりCookieを無効にすることも可能です。
                        </p>
                    </div>
                </section>

                {/* 広告表記 */}
                <section className="mb-12">
                    <h2
                        id="advertisement"
                        className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200"
                    >
                        広告について
                    </h2>
                    <div className="bg-lime-50 border border-lime-200 rounded-xl p-6">
                        <p className="text-gray-700 leading-relaxed">
                            当サイトは、<strong>アフィリエイト広告</strong>を利用しています。
                        </p>
                        <p className="text-gray-600 text-sm mt-3">
                            当サイトから外部サービスへのリンクをクリックし、
                            サービスの登録・申込・購入等が行われた場合、
                            当サイト運営者に広告収入が発生することがあります。
                        </p>
                        <p className="text-gray-600 text-sm mt-3">
                            掲載している情報は、できる限り正確な情報を掲載するよう努めておりますが、
                            広告主の都合により内容が変更される場合があります。
                            最新の情報は公式サイトにてご確認ください。
                        </p>
                    </div>
                </section>

                {/* 更新日 */}
                <div className="text-center text-sm text-gray-500">
                    <p>最終更新日：2024年1月</p>
                </div>
            </div>
        </div>
    );
}
