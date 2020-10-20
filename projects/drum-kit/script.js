let options = {"A":"clap", "S":"hihat" , "D":"kick", "F":"openhat", "G":"boom", "H":"ride", "J":"snare", "K":"tom", "L":"tink"};

document.addEventListener("keydown", keyPress);
document.addEventListener("keyup", keyPress);

function keyPress(event) {
  let letter = String.fromCharCode(event.which);
  let key = document.getElementById(letter);
  if (letter in options && event.type === "keydown") {
    key.setAttribute("class", "key-pressed");
    new Audio("sounds/" + options[letter] + ".wav").play();
  } else {
    key.setAttribute("class", "key");
  }
}



  
