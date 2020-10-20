document.addEventListener("click", clickButton);
let screen = document.querySelector("input");
let basicOperations = ["÷", "x", "+", "-"];

function clickButton(event) {
  let inputValue = event.target.textContent;
  if (!parseInt(inputValue) && screen.value === "") return;
  screen.value += event.target.textContent;
  if (event.target.nodeName === "BUTTON") screen.placeholder = "";
}