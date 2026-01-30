// AlertBox コンポーネント
// 重要注意（WEB応募のみ / 30日以内面談 / 必要書類）を目立たせる

type AlertBoxProps = {
    variant?: "warning" | "info" | "important";
    title?: string;
    children: React.ReactNode;
};

export function AlertBox({
    variant = "important",
    title,
    children,
}: AlertBoxProps) {
    const variantStyles = {
        warning: {
            container: "bg-amber-50 border-amber-200",
            icon: "text-amber-500",
            title: "text-amber-800",
            content: "text-amber-700",
        },
        info: {
            container: "bg-blue-50 border-blue-200",
            icon: "text-blue-500",
            title: "text-blue-800",
            content: "text-blue-700",
        },
        important: {
            container: "bg-lime-50 border-lime-200",
            icon: "text-lime-400",
            title: "text-lime-700",
            content: "text-lime-600",
        },
    };

    const styles = variantStyles[variant];

    return (
        <div
            className={`rounded-xl border-2 p-4 md:p-6 ${styles.container}`}
            role="alert"
        >
            <div className="flex gap-3">
                <div className={`flex-shrink-0 ${styles.icon}`}>
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="flex-1">
                    {title && (
                        <h3 className={`font-bold text-lg mb-2 ${styles.title}`}>{title}</h3>
                    )}
                    <div className={`text-sm md:text-base ${styles.content}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
