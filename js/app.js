const text = document.querySelector(".js-text");
const words = document.querySelector(".js-words");
const characters = document.querySelector(".js-characters");
const symbols = document.querySelector(".js-symbols");

text.addEventListener("input", () => {
  words.innerHTML = text.value.trim().split(/\s+/).length;
});
