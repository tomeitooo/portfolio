/**
 * 公開URLのオリジン（末尾スラッシュなし）。未設定のときはナビは相対パス（/works など）のまま。
 * index / works の monoConfig.links と about のナビ書き換えで利用。
 */
window.MONO_SITE_BASE = "https://portfolio.tomeit-o.com";

/**
 * サイト内パス（先頭 /）を、MONO_SITE_BASE があれば絶対URLに解決する。
 */
window.monoResolveNavUrl = function (path) {
    var base =
        typeof MONO_SITE_BASE !== "undefined" && MONO_SITE_BASE
            ? String(MONO_SITE_BASE).replace(/\/+$/, "")
            : "";
    if (!path || path.charAt(0) !== "/") {
        path = "/" + (path || "");
    }
    return base ? base + path : path;
};

/**
 * 別タブで開くべきリンク用の属性。同一オリジン（MONO_SITE_BASE）と mailto は別タブにしない。
 */
window.monoLinkTargetAttrs = function (url) {
    if (!url || url.indexOf("mailto:") === 0) {
        return "";
    }
    if (!/^https?:\/\//i.test(url)) {
        return "";
    }
    var base =
        typeof MONO_SITE_BASE !== "undefined" && MONO_SITE_BASE
            ? String(MONO_SITE_BASE).replace(/\/+$/, "").toLowerCase()
            : "";
    if (!base) {
        return ' target="_blank" rel="noopener noreferrer"';
    }
    var u = url.toLowerCase().split("?")[0].split("#")[0];
    if (u === base || u === base + "/" || u.indexOf(base + "/") === 0) {
        return "";
    }
    return ' target="_blank" rel="noopener noreferrer"';
};

/**
 * index（作品一覧・モーダル）と about（Selected Works）で共通利用。
 * aboutPick: true のものだけ About に掲載。1件もなければ先頭から最大4件。
 * year: About の「カテゴリ / 年」行用（index では未使用）
 */
window.MONO_WORKS = [
    {
        title: "ポートフォリオ",
        category: "Web",
        imageFile: "portfolio.png",
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
