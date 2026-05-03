/**
 * index（作品一覧・モーダル）と about（Selected Works）で共通利用。
 * aboutPick: true のものだけ About に掲載。1件もなければ先頭から最大4件。
 * year: About の「カテゴリ / 年」行用（index では未使用）
 */
window.MONO_WORKS = [
    {
        title: "ポートフォリオ",
        category: "Web",
        imageFile: "no_image.png",
        desc: "本ポートフォリオサイトです。",
        url: "https://portfolio.tomeit-o.com/",
        year: "2026",
        aboutPick: true
    },
    {
        title: "iFolder",
        category: "Web",
        imageFile: "ifolder_tomeit-o_com.png",
        desc: "ブラウザ上で macOS のフォルダアイコンを作成できる、ウェブツールです。",
        url: "https://ifolder.tomeit-o.com/",
        year: "2026",
        aboutPick: true
    }
];
