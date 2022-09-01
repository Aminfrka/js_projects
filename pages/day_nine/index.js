sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  console.log(sound);
  btn = document.createElement("button");
  btn.innerText = sound;
  btns = document.getElementById("btns");
  btns.appendChild(btn);

  btn.addEventListener("click", () => {
    sounds.forEach((sound) => {
      sund = document.getElementById(sound);
      sund.pause();
      sund.currentTime = 0;
    });
    document.getElementById(sound).play();
  });
});
