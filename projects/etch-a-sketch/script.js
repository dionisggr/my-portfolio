let chosenColor;
let defaultColor = "rgb(20, 20, 20)";
let rows = 25;
let columns = 25;

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777217).toString(16);
} 

function reset(event) {
  document.querySelectorAll(".square").forEach((element) => element.style.backgroundColor = "white");
  if (event.target.id === "black") {
    chosenColor = "rgb(20, 20, 20)";
    defaultColor = null;
  } else if (event.target.id === "color") {
    chosenColor = prompt("What color would you like to try?");
    defaultColor = null;
  } else if (event.target.id === "change") {
    rows = prompt("How many rows?");
    columns = prompt("How many columns?");
    createGrid(rows, columns);
  } else {
    chosenColor = null;
    defaultColor = null;
  }
}

function modifyGrid() {
  rows = prompt("How many rows?");
  columns = prompt("How many columns?");
  document.querySelector("#container").remove();
  document.querySelector("body").appendChild(createGrid(rows, columns));
}

function createGrid(rows=25, columns=25) {
  document.querySelectorAll(".square").forEach((element) => element.style.backgroundColor = "white");
  let container = document.createElement("div");
  container.id = "container";
  container.style.height = "500px";
  container.style.width = "500px";
  container.style.border = "solid";
  container.style.borderWidth = "1px";
  container.style.borderColor = "rgba(0, 0, 0, 0.322)"
  container.style.borderRadius = "2px";
  container.style.margin = "25px";
  for (i=0; i<columns; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    for (j=0; j<rows; j++) {
      let square = document.createElement("div");
      square.style.height = 500/columns+"px";
      square.style.width = "100%"
      square.style.borderColor =  "rgba(0, 0, 0, 0.747)";
      square.style.backgroundColor = "white";
      square.setAttribute("class", "square");
      square.addEventListener("mouseover", () => square.style.backgroundColor = chosenColor || defaultColor || randomColor());
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  return container;
}

window.onload = () => {
  let html = document.querySelector("html");
  html.style.background = "url(img/background.png)"
  html.style.backgroundSize = "cover";
  html.style.backgroundPosition = "center center";
  html.style.height = "100%";

  let body = document.querySelector("body");
  body.style.height = "100%";
  body.style.width = "100%";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.margin = "0";

  let buttonRow = document.createElement("div");
  let changeGrid = document.createElement("button");
  let blackInk = document.createElement("button");
  let colorInk = document.createElement("button");
  let multiColorInk = document.createElement("button");
  buttonRow.style.display = "flex";
  changeGrid.textContent = "CHANGE GRID";  
  blackInk.textContent = "BLACK";  
  colorInk.textContent = "COLOR";  
  multiColorInk.textContent = "MULTI - COLOR";  
  changeGrid.style.height = blackInk.style.height = colorInk.style.height = multiColorInk.style.height = "75px";
  changeGrid.style.width = blackInk.style.width = colorInk.style.width = multiColorInk.style.width = "150px";
  changeGrid.style.backgroundColor = blackInk.style.backgroundColor = colorInk.style.backgroundColor = multiColorInk.style.backgroundColor = "rgb(49, 206, 49)";
  changeGrid.style.borderRadius = blackInk.style.borderRadius = colorInk.style.borderRadius = multiColorInk.style.borderRadius = "5px";
  changeGrid.style.margin = blackInk.style.margin = colorInk.style.margin = multiColorInk.style.margin = "25px 50px";
  changeGrid.style.fontWeight = blackInk.style.fontWeight = colorInk.style.fontWeight = multiColorInk.style.fontWeight = "bolder";
  changeGrid.style.fontSize = blackInk.style.fontSize = colorInk.style.fontSize = multiColorInk.style.fontSize = "20px";
  changeGrid.style.fontFamily = blackInk.style.fontFamily = colorInk.style.fontFamily = multiColorInk.style.fontFamily = "Courier New";
  changeGrid.style.textShadow = blackInk.style.textShadow = colorInk.style.textShadow = multiColorInk.style.textShadow = "-1px 1px rgba(255, 255, 255, 0.829)";
  blackInk.style.color = "black";
  colorInk.style.color = "rgb(7, 7, 182)";
  multiColorInk.style.color = "rgb(226, 0, 0)";
  changeGrid.style.color = "purple";
  blackInk.id = "black";
  colorInk.id = "color";
  multiColorInk.id = "multi";
  changeGrid.id = "change";
  blackInk.addEventListener("click", reset);
  colorInk.addEventListener("click", reset);
  multiColorInk.addEventListener("click", reset);
  changeGrid.addEventListener("click", modifyGrid);
  buttonRow.appendChild(blackInk);
  buttonRow.appendChild(colorInk);
  buttonRow.appendChild(multiColorInk);
  body.appendChild(changeGrid);
  body.appendChild(buttonRow);
  body.appendChild(createGrid());
}