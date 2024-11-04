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
    avatar.height = 32;
    avatar.width = 32;
    avatar.style.borderRadius = "50px"; // 単位を追加
    avatar.decoding = "async";
    avatar.style.marginBottom = "-8px";

    // 投稿者情報の見出しを作成
    const heading = document.createElement("h6");
    heading.innerHTML = '書いた人... つくる';
    heading.style.fontWeight = "normal";
    heading.style.marginTop = "-12px";

    // 投稿者説明を作成
    const description = document.createElement("p");
    description.className = "author-description";
    description.textContent = "Growed up in Fukuoka , Japan. Live in Tokyo. Programer, DTMer, Love Chocolate, running, Reading. 福岡出身です。東京住みです。プログラマ, DTM。チョコレート、ランニング、読書、ラジオが好きです。";


    const rights = document.createElement("p");
    rights.innerHTML = 'Copyright © 思草文所. All Rights Reserved.';


    // 要素を親コンテナに追加
    authorInfo.appendChild(avatar);
    authorInfo.appendChild(heading);
    authorInfo.appendChild(description);
    authorInfo.appendChild(rights);

    // ページに挿入（bodyの最後に追加する例）
    document.body.appendChild(authorInfo);
}

// ページが読み込まれたときに関数を実行
document.addEventListener("DOMContentLoaded", loadAuthorInfo);
