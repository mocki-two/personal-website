console.log("Hello World!");

console.clear();

const jsButton = document.querySelector(".js-button");
const jsAppearDisappear = document.querySelector(".js-appear-disappear");

jsButton.addEventListener("click", () =>
  jsAppearDisappear.classList.toogle("hidden")
);
