// PRバッジコンポーネント
// ファーストビューで常時見せるPR表記（sticky）

export function PRBadge() {
    return (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-lime-50 to-green-50 border-b border-lime-100">
            <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-lime-400 text-white">
                    PR
                </span>
                <span className="text-gray-600">
                    ※本ページはプロモーションを含みます
                </span>
            </div>
        </div>
    );
}
