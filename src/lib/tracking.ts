// クリック計測ユーティリティ
// GA4/gtagがあれば送信、なければconsole.logで記録

import type { A8LinkParams } from "./a8-link";

declare global {
    interface Window {
        gtag?: (
            command: "event",
            eventName: string,
            eventParams: Record<string, unknown>
        ) => void;
    }
}

export type TrackingPayload = {
    pagePath: string;
    ctaPosition: string;
} & Partial<A8LinkParams>;

/**
 * A8外部リンククリックを計測
 * gtagがあればGA4に送信、なければconsole.logで記録
 */
export function trackA8Click(payload: TrackingPayload): void {
    const eventName = "a8_outbound_click";

    const eventParams = {
        page_path: payload.pagePath,
        cta_position: payload.ctaPosition,
        id1: payload.id1,
        id2: payload.id2,
        id3: payload.id3,
        id4: payload.id4,
        id5: payload.id5,
    };

    // gtagが利用可能な場合はGA4に送信
    if (typeof window !== "undefined" && window.gtag) {
        try {
            window.gtag("event", eventName, eventParams);
        } catch (error) {
            console.error("Failed to send gtag event:", error);
        }
    } else {
        // 開発環境用：console.logで記録
        console.log(`[Tracking] ${eventName}:`, eventParams);
    }
}
