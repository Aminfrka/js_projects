const circles = document.querySelectorAll(".circle");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 1;

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > circles.length) {
    currentIndex = circles.length;
  }
  console.log(currentIndex);
  activeCircle();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = 1;
  }
  console.log(currentIndex);
  activeCircle();
});

function activeCircle() {
  circles.forEach((circle, idx) => {
    if (idx < currentIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentIndex === 1) {
    prevBtn.disabled = true;
  } else if (currentIndex === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  console.log(actives.length);
}
