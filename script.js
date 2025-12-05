
document.addEventListener("DOMContentLoaded", () => {
    console.log("Shofactom website loaded.");
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav ul");
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});
