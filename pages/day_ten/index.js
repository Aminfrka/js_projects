content = document.querySelector(".content");

generateContent();

async function generateContent() {
  res = await fetch("https://icanhazdadjoke.com/slack");
  data = await res.json();

  if (res.status === 200) {
    // console.log(data.attachments[0].text);
    document.querySelector(".content p").innerHTML = data.attachments[0].text;
  } else {
    console.log("error");
  }
}

btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", generateContent);
