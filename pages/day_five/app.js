const container = document.querySelector(".container");
const content = document.getElementById("content");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  content.innerHTML = `${load}%`;
  container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  content.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
