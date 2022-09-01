const labelEls = document.querySelectorAll(".form-control label");

labelEls.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => {
      return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
    })
    .join("");
});
