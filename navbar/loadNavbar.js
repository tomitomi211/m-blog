// loadNavbar.js

document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.json")
        .then(response => response.json())
        .then(data => {
            const navbar = document.getElementById("navbar");
            const navList = document.createElement("ul");

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
