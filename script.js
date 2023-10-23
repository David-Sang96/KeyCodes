"use strict";

window.addEventListener("keydown", codeGenerate);

function codeGenerate(e) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const code = {
    key: e.key,
    keyCode: e.keyCode,
    Code: e.code,
  };
  console.log(code);

  for (let key in code) {
    const div = document.createElement("div");
    const small = document.createElement("small");
    small.innerText = key === " "? "Space" : key;
    const textDiv = document.createElement("div");
    textDiv.classList.add("box");
    textDiv.innerText = code[key] === " " ? "Space" : code[key];
    div.append(small, textDiv);
    container.append(div);
  }
}
