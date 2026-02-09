document.addEventListener("DOMContentLoaded", () => {
    const orderOnlineBtn = document.getElementById("orderOnlineBtn");
    if(orderOnlineBtn) {
        orderOnlineBtn.addEventListener("click", () => {
            window.location.href = "html/products.html";
        });
    }

    const searchBtn = document.getElementById("searchBtn");
    if(searchBtn) {
        searchBtn.addEventListener("click", () => {
            let item = prompt("Search for cakes, pastries, brownies...");
            if (item) {
                alert("You searched for: " + item);
            }
        });
    }

    const aboutSection = document.getElementById("aboutSection");
    if(aboutSection){
        window.addEventListener("scroll", () => {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (sectionTop < screenHeight - 100) {
                aboutSection.classList.add("show");
            }
        });
    }

    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert(card.innerText + " clicked!");
        });
    });

    // Auth buttons handling
    const authButtons = document.querySelector(".auth-buttons");
    if (authButtons) {
        const loggedInUser = localStorage.getItem("loggedInUser");

        if (loggedInUser) {
            // User is logged in → hide login/signup buttons
            authButtons.style.display = "none";

            // Optional: show username + logout
            // const user = JSON.parse(loggedInUser);
            // authButtons.innerHTML = `<span>Hi, ${user.name}</span><button id="logoutBtn">Logout</button>`;
            // document.getElementById("logoutBtn").addEventListener("click", () => {
            //     localStorage.removeItem("loggedInUser");
            //     location.reload();
            // });
        } else {
            // User not logged in → show buttons
            authButtons.style.display = "flex";
        }
    }
});
