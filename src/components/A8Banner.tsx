// A8バナー広告コンポーネント

export function A8Banner() {
    return (
        <div className="flex justify-center py-8 bg-gray-50">
            <div className="text-center">
                <a
                    href="https://px.a8.net/svt/ejp?a8mat=4AVI43+XCC76+54JW+5ZMCH"
                    rel="nofollow"
                    target="_blank"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        width={300}
                        height={250}
                        alt="フェアリーテイル求人"
                        src="https://www29.a8.net/svt/bgt?aid=260130675056&wid=003&eno=01&mid=s00000023918001006000&mc=1"
                        className="rounded-lg shadow-md hover:shadow-lg transition-shadow border-0"
                    />
                </a>
                {/* インプレッション計測用 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    width={1}
                    height={1}
                    src="https://www15.a8.net/0.gif?a8mat=4AVI43+XCC76+54JW+5ZMCH"
                    alt=""
                    className="border-0"
                />
            </div>
        </div>
    );
}
