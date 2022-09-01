const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    makeInactive();
    e.currentTarget.classList.remove("inactive");
    e.currentTarget.classList.add("active");
  });
});

function makeInactive() {
  panels.forEach((panel) => {
    panel.classList.add("inactive");
    panel.classList.remove("active");
  });
}
