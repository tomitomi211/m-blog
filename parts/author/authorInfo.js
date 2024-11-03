// authorInfo.js

function loadAuthorInfo() {
    // コンテナ要素を作成
    const authorInfo = document.createElement("div");
    authorInfo.className = "author-info";

    // 画像要素を作成
    const avatar = document.createElement("img");
    avatar.alt = "";
    // avatar.src = "https://secure.gravatar.com/avatar/f9ad0ba6151cd5743e592b481fbfec31?s=75&d=mm&r=g";
    // avatar.srcset = "https://secure.gravatar.com/avatar/f9ad0ba6151cd5743e592b481fbfec31?s=150&d=mm&r=g 2x";
    avatar.className = "avatar avatar-75 photo";
    avatar.height = 75;
    avatar.width = 75;
    avatar.decoding = "async";

    // 投稿者情報の見出しを作成
    const heading = document.createElement("h6");
    heading.innerHTML = 'Posted by <a href="" title="webツク" rel="author">ウェブツク</a>';

    // 投稿者説明を作成
    const description = document.createElement("p");
    description.className = "author-description";
    description.textContent = "Growed in Fukuoka , Japan. ";

    // 要素を親コンテナに追加
    authorInfo.appendChild(avatar);
    authorInfo.appendChild(heading);
    authorInfo.appendChild(description);

    // ページに挿入（bodyの最後に追加する例）
    document.body.appendChild(authorInfo);
}

// ページが読み込まれたときに関数を実行
document.addEventListener("DOMContentLoaded", loadAuthorInfo);
