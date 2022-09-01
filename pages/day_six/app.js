const contents = document.querySelectorAll(".content");

let containerHeight = (window.innerHeight / 5) * 4;

window.addEventListener("scroll", displayContent);

function displayContent() {
  contents.forEach((content) => {
    const topBox = content.getBoundingClientRect().top;
    if (topBox < containerHeight) {
      content.classList.add("show");
    } else {
      content.classList.remove("show");
    }
  });
}
