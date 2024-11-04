// loadNavbar.js

document.addEventListener("DOMContentLoaded", function () {
    fetch("links.json")
        .then(response => response.json())
        .then(data => {
            const navbar = document.getElementById("navbar");

            // "関連アーカイブ"の<p>タグを作成して挿入
            const heading = document.createElement("p");
            heading.textContent = "関連アーカイブ";
            heading.style.paddingLeft = "20px"
            navbar.appendChild(heading);

            const navList = document.createElement("ul");
            navList.style.fontSize="0.9em";

            data.forEach(link => {
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.href = link.href;
                anchor.textContent = link.title;
                listItem.appendChild(anchor);
                navList.appendChild(listItem);
            });

            // ナビゲーションを挿入
            const navElement = document.createElement("nav");
            navElement.appendChild(navList);
            navbar.appendChild(navElement);
        })
        .catch(error => console.error("Error loading navbar:", error));
});
