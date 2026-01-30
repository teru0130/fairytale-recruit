// 応募前チェックUIコンポーネント
// 全CTA直前に配置し、否認回避のため条件確認させる

"use client";

import { useState, useCallback } from "react";
import { PRE_APPLICATION_CHECKS } from "@/lib/site";
import { WarningModal } from "./WarningModal";
import { CTAButton, type CTAButtonProps } from "./CTAButton";

type PreApplicationCheckProps = {
    pageId: string;
    position: "fv" | "mid" | "bottom";
    ctaText?: string;
};

export function PreApplicationCheck({
    pageId,
    position,
    ctaText = "公式ページからWEB応募する",
}: PreApplicationCheckProps) {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
    const [showModal, setShowModal] = useState(false);
    const [pendingNavigation, setPendingNavigation] = useState(false);

    const allChecked = checkedItems.size === PRE_APPLICATION_CHECKS.length;

    const handleCheckChange = useCallback((id: string, checked: boolean) => {
        setCheckedItems((prev) => {
            const next = new Set(prev);
            if (checked) {
                next.add(id);
            } else {
                next.delete(id);
            }
            return next;
        });
    }, []);

    const handleCTAClick = useCallback(
        (e: React.MouseEvent) => {
            if (!allChecked) {
                e.preventDefault();
                setPendingNavigation(true);
                setShowModal(true);
            }
            // allCheckedの場合はCTAButtonの通常動作（リンク遷移）
        },
        [allChecked]
    );

    const handleModalClose = useCallback(() => {
        setShowModal(false);
        setPendingNavigation(false);
    }, []);

    const handleModalConfirm = useCallback(() => {
        setShowModal(false);
        // 確認後にリンクを開く
        if (pendingNavigation) {
            // CTAButtonからURLを取得して開く
            const ctaElement = document.querySelector(
                `[data-cta-position="${position}"]`
            ) as HTMLAnchorElement;
            if (ctaElement && ctaElement.href) {
                window.open(ctaElement.href, "_blank", "noopener,noreferrer");
            }
        }
        setPendingNavigation(false);
    }, [pendingNavigation, position]);

    const ctaProps: CTAButtonProps = {
        pageId,
        position,
        text: ctaText,
        onClick: handleCTAClick,
        "data-cta-position": position,
    };

    return (
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl p-6 md:p-8 border border-lime-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg
                    className="w-5 h-5 text-lime-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    />
                </svg>
                応募前チェック
            </h3>

            <p className="text-sm text-gray-600 mb-4">
                以下の条件を満たしているか確認してください。
                <span className="text-lime-500 font-medium">
                    ※LINE応募は対象外です
                </span>
            </p>

            <div className="space-y-3 mb-6">
                {PRE_APPLICATION_CHECKS.map((item) => (
                    <label
                        key={item.id}
                        className="flex items-start gap-3 cursor-pointer group"
                    >
                        <div className="flex-shrink-0 mt-0.5">
                            <input
                                type="checkbox"
                                checked={checkedItems.has(item.id)}
                                onChange={(e) => handleCheckChange(item.id, e.target.checked)}
                                className="w-5 h-5 rounded border-gray-300 text-lime-400 focus:ring-lime-400 focus:ring-offset-0 cursor-pointer"
                            />
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                            {item.label}
                        </span>
                    </label>
                ))}
            </div>

            {/* 進捗表示 */}
            <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>確認状況</span>
                    <span>
                        {checkedItems.size} / {PRE_APPLICATION_CHECKS.length}
                    </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-lime-300 to-green-400 transition-all duration-300"
                        style={{
                            width: `${(checkedItems.size / PRE_APPLICATION_CHECKS.length) * 100}%`,
                        }}
                    />
                </div>
            </div>

            {/* CTAボタン */}
            <CTAButton {...ctaProps} />

            {/* 注意テキスト */}
            <p className="mt-4 text-xs text-gray-500 text-center">
                ※WEB応募のみ対象です。LINE応募は対象外となります。
            </p>

            {/* 警告モーダル */}
            <WarningModal
                isOpen={showModal}
                onClose={handleModalClose}
                onConfirm={handleModalConfirm}
            />
        </div>
    );
}
