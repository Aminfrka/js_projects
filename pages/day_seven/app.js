const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const input = document.querySelector(".search-bar");

btn.addEventListener("click", () => {
  container.classList.toggle("active");
  input.focus();
});
