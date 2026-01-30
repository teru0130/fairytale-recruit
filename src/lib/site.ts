// サイト共通定数
export const SITE_CONFIG = {
    name: "ノンアダルト専門チャットレディ求人ガイド",
    description: "ノンアダルト専門プロダクション「フェアリーテイル」の求人情報を紹介。WEB応募から面談までの流れ、応募条件、安全性について詳しく解説します。",
    url: "https://fairytale-recruit.vercel.app",
    version: process.env.NEXT_PUBLIC_SITE_VERSION || "v1",
} as const;

// ページ識別子
export const PAGE_IDS = {
    home: "home",
    aboutNonadult: "about-nonadult",
    safety: "safety",
    howToStart: "how-to-start",
    requirements: "requirements",
    faq: "faq",
    legal: "legal",
    blog: "blog",
} as const;

// 応募前チェック項目
export const PRE_APPLICATION_CHECKS = [
    {
        id: "web-application",
        label: "WEB応募ができる（※LINE応募は対象外）",
    },
    {
        id: "age-gender",
        label: "18歳以上の女性",
    },
    {
        id: "nationality",
        label: "外国籍ではない",
    },
    {
        id: "disability",
        label: "障害者手帳を持っていない",
    },
    {
        id: "id-document",
        label: "顔写真付き身分証を用意できる（例：免許証/マイナンバー/パスポート/住基カード/学生証）",
    },
    {
        id: "accurate-input",
        label: "応募フォームを不備なく正確に入力できる",
    },
] as const;

// 身分証の例
export const ID_DOCUMENTS = [
    "マイナンバーカード",
    "運転免許証",
    "パスポート",
    "住民基本台帳カード（顔写真付き）",
    "学生証（顔写真付き）",
] as const;

// 否認条件
export const DENIAL_CONDITIONS = [
    "LINEからの申込（WEB応募のみ対象）",
    "応募内容に不備がある場合（虚偽入力、入力不備、必要書類不備）",
    "外国籍の方",
    "障害者手帳を持っている方",
    "顔写真付き身分証がない方",
] as const;

// 成果条件
export const SUCCESS_CONDITIONS = {
    target: "18歳以上の女性",
    requirement: "広告主新規（当広告主を初めて利用する方）",
    deadline: "WEB応募完了後、30日以内にチャットレディ面談完了",
} as const;
