// CTAボタンコンポーネント
// A8アフィリエイトリンクへ遷移するCTA

"use client";

import { usePathname } from "next/navigation";
import { generateA8LinkWithVersion, type A8LinkParams } from "@/lib/a8-link";
import { trackA8Click } from "@/lib/tracking";

export type CTAButtonProps = {
    pageId: string;
    position: "fv" | "mid" | "bottom";
    text?: string;
    variant?: "primary" | "secondary";
    onClick?: (e: React.MouseEvent) => void;
    "data-cta-position"?: string;
};

export function CTAButton({
    pageId,
    position,
    text = "公式ページからWEB応募する",
    variant = "primary",
    onClick,
    ...props
}: CTAButtonProps) {
    const pathname = usePathname();

    const linkParams: Omit<A8LinkParams, "id4"> = {
        id1: "seo", // デフォルトはSEO流入
        id2: pageId,
        id3: position,
    };

    const href = generateA8LinkWithVersion(linkParams);

    const handleClick = (e: React.MouseEvent) => {
        // カスタムonClickがあれば先に実行
        if (onClick) {
            onClick(e);
            // preventDefaultされた場合は計測・遷移しない
            if (e.defaultPrevented) {
                return;
            }
        }

        // クリック計測（失敗しても遷移は止めない）
        try {
            trackA8Click({
                pagePath: pathname,
                ctaPosition: position,
                id1: linkParams.id1,
                id2: linkParams.id2,
                id3: linkParams.id3,
            });
        } catch (error) {
            console.error("Tracking failed:", error);
        }
    };

    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold rounded-xl transition-all duration-200 w-full sm:w-auto";

    const variantStyles = {
        primary:
            "bg-gradient-to-r from-lime-400 to-green-400 text-white hover:from-lime-500 hover:to-green-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        secondary:
            "bg-white text-lime-500 border-2 border-lime-400 hover:bg-lime-50",
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`${baseStyles} ${variantStyles[variant]}`}
            {...props}
        >
            <span>{text}</span>
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
            </svg>
        </a>
    );
}
