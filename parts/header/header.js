// authorInfo.js

function loadHeaderInfo() {
    // コンテナ要素を作成
    const headerInfo = document.createElement("div");
    headerInfo.className = "header-info";

    // 投稿者情報の見出しを作成
    const heading = document.createElement("h6");
    heading.innerHTML = 'ウェブツク';

    // 要素を親コンテナに追加
    headerInfo.appendChild(heading);

    // ページに挿入（bodyの最後に追加する例）
    document.body.insertBefore(headerInfo, document.body.firstChild);
}

// ページが読み込まれたときに関数を実行
document.addEventListener("DOMContentLoaded", loadHeaderInfo);
