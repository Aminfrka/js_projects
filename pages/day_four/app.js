const leftSide = document.getElementById("left");
const rightSide = document.getElementById("right");
const container = document.querySelector(".container");

leftSide.addEventListener("mouseenter", () =>
  container.classList.add("active-left")
);
leftSide.addEventListener("mouseleave", () =>
  container.classList.remove("active-left")
);
rightSide.addEventListener("mouseenter", () =>
  container.classList.add("active-right")
);
rightSide.addEventListener("mouseleave", () =>
  container.classList.remove("active-right")
);
