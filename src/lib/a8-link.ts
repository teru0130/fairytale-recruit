// A8アフィリエイトリンク生成ユーティリティ
// URLクラスで安全にクエリパラメータを付与

export type A8LinkParams = {
    id1: "seo" | "x" | "direct";
    id2: string; // page id (home/requirements/faq...)
    id3: "fv" | "mid" | "bottom";
    id4?: string; // version
    id5?: string; // optional
};

// A8リンク（環境変数が反映されない場合のフォールバック込み）
const A8_BASE_URL = process.env.NEXT_PUBLIC_A8_BASE_URL || "https://px.a8.net/svt/ejp?a8mat=4AVI43+XCC76+54JW+5ZMCH";

/**
 * A8アフィリエイトリンクを生成
 * ベースURLが未設定の場合は # にフォールバック
 */
export function generateA8Link(params: A8LinkParams): string {
    if (!A8_BASE_URL) {
        // 開発環境用フォールバック
        console.warn("A8 base URL is not configured. Using fallback.");
        return "#";
    }

    try {
        const url = new URL(A8_BASE_URL);

        // id1-id5を安全に付与
        url.searchParams.set("id1", params.id1);
        url.searchParams.set("id2", params.id2);
        url.searchParams.set("id3", params.id3);

        if (params.id4) {
            url.searchParams.set("id4", params.id4);
        }

        if (params.id5) {
            url.searchParams.set("id5", params.id5);
        }

        return url.toString();
    } catch (error) {
        console.error("Failed to generate A8 link:", error);
        return "#";
    }
}

/**
 * デフォルトバージョン付きでA8リンクを生成
 */
export function generateA8LinkWithVersion(
    params: Omit<A8LinkParams, "id4">
): string {
    const version = process.env.NEXT_PUBLIC_SITE_VERSION || "v1";
    return generateA8Link({ ...params, id4: version });
}
