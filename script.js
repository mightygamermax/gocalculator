// =========================
// Go Calculator
// Version 1.0
// =========================

console.log("🚀 Go Calculator Started");

// Search Box
const searchBox = document.querySelector("input");
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Card Click Animation
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.97)";

        setTimeout(() => {
            card.style.transform = "";
        }, 150);
    });
});