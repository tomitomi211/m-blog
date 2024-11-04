// EmailJSのスクリプトを動的に読み込む
(function() {
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    script.onload = function() {
        // EmailJSの初期化（ユーザーIDを設定）
        emailjs.init("K_Foq5ywcZa7VRiJC"); // "YOUR_USER_ID" を自分のユーザーIDに置き換えます
    };
    document.head.appendChild(script);
})();

// フォーム作成と送信イベントの設定
document.addEventListener("DOMContentLoaded", function() {
    // フォームのHTMLを挿入
    const formHTML = `
        <form id="contactForm" style="display:flex; flex-flow:column; width:400px; font-size:0.9em; padding-left:20px; margin-top:40px;">
            <label>何かあれば。コメント、仕事依頼など：</label>
            <label>お名前</label>
            <input type="text" name="user_name" placeholder="Your Name" required>
            <label>メールアドレス(返信希望の場合のみ、なくても大丈夫です。)</label>
            <input type="email" name="user_email" placeholder="Your Email" required>
            <label>コメント</label>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" style="margin-top:8px;">Send</button>
        </form>
    `;
    document.body.insertAdjacentHTML("beforeend", formHTML);

    // フォームの送信イベントリスナーを設定
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // フォームのデフォルト送信をキャンセル

        // EmailJSでメール送信
        emailjs.sendForm("service_fivy4te", "template_jxwxmcu", this)
            .then(function(response) {
                alert("メールが送信されました！");
                console.log("Success!", response.status, response.text);
            }, function(error) {
                alert("メールの送信に失敗しました。");
                console.log("Failed...", error);
            });
    });
});
