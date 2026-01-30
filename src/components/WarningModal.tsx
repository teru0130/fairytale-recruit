// 警告モーダルコンポーネント
// チェック未完了時に注意喚起しつつCVは落とさない

"use client";

import { useEffect, useRef } from "react";

type WarningModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

export function WarningModal({ isOpen, onClose, onConfirm }: WarningModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // ESCキーで閉じる
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    // モーダル外クリックで閉じる
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    // ボディスクロール防止
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {/* アイコン */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-amber-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                {/* タイトル */}
                <h2
                    id="modal-title"
                    className="text-lg font-bold text-gray-800 text-center mb-3"
                >
                    条件をご確認ください
                </h2>

                {/* 本文 */}
                <p className="text-gray-600 text-sm text-center leading-relaxed mb-6">
                    条件に当てはまらない場合、対象外となる可能性があります。
                    <br />
                    問題なければ公式ページへ進んでください。
                </p>

                {/* ボタン */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        戻る
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 px-4 py-3 text-sm font-medium text-white bg-lime-400 rounded-xl hover:bg-lime-500 transition-colors"
                    >
                        公式ページへ進む
                    </button>
                </div>
            </div>
        </div>
    );
}
