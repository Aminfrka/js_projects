const openBtn = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");
const container = document.querySelector(".container");

closeBtn.addEventListener("click", () => container.classList.remove("active"));
openBtn.addEventListener("click", () => container.classList.add("active"));
