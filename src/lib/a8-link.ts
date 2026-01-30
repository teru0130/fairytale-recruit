// A8アフィリエイトリンク生成ユーティリティ
// 本番用A8リンクを直接埋め込み

export type A8LinkParams = {
    id1: "seo" | "x" | "direct";
    id2: string; // page id (home/requirements/faq...)
    id3: "fv" | "mid" | "bottom";
    id4?: string; // version
    id5?: string; // optional
};

// A8ベースURL（直接埋め込み）
const A8_BASE_URL = "https://px.a8.net/svt/ejp?a8mat=4AVI43+XCC76+54JW+5ZMCH";

/**
 * A8アフィリエイトリンクを生成
 */
export function generateA8Link(params: A8LinkParams): string {
    // ベースURLにパラメータを追加
    const url = `${A8_BASE_URL}&id1=${params.id1}&id2=${params.id2}&id3=${params.id3}&id4=${params.id4 || "v1"}`;
    return url;
}

/**
 * デフォルトバージョン付きでA8リンクを生成
 */
export function generateA8LinkWithVersion(
    params: Omit<A8LinkParams, "id4">
): string {
    return generateA8Link({ ...params, id4: "v1" });
}
