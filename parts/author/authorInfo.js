// authorInfo.js

function loadAuthorInfo() {
    // コンテナ要素を作成
    const authorInfo = document.createElement("div");
    authorInfo.className = "author-info";

    // 画像要素を作成
    const avatar = document.createElement("img");
    avatar.alt = "";
    avatar.src = "../../fukuoka.png";
    avatar.className = "avatar avatar-75 photo";
    avatar.height = 45;
    avatar.width = 45;
    avatar.style.borderRadius = "50px"; // 単位を追加
    avatar.decoding = "async";

    // 投稿者情報の見出しを作成
    const heading = document.createElement("h6");
    heading.innerHTML = 'Posted by つくる';

    // 投稿者説明を作成
    const description = document.createElement("p");
    description.className = "author-description";
    description.textContent = "Growed in Fukuoka , Japan. Live in Tokyo. Programer, DTMer, Love Chocolate, running, Reading. 福岡出身です。東京住みです。プログラマ, DTM。チョコレート、ランニング、読書が好きです。";

    // 要素を親コンテナに追加
    authorInfo.appendChild(avatar);
    authorInfo.appendChild(heading);
    authorInfo.appendChild(description);

    // ページに挿入（bodyの最後に追加する例）
    document.body.appendChild(authorInfo);
}

// ページが読み込まれたときに関数を実行
document.addEventListener("DOMContentLoaded", loadAuthorInfo);
