let options = ["rock", "paper", "scissors"];

function reset() {
  document.location.reload();
}

let computerPlay = () => {
  let min = 0;
  let max = options.length-1;
  randomNum = Math.floor(Math.random() * (max-min+1) + min);
  return options[randomNum];
}
/*  Learned that Math.round only goes from 0 to 1.
    Extra variables that could be ommited were created just to remember the logic of its use.
*/

let playerPlay = (event) => {
  if (event.target.parentNode.id) {
    event.target.parentNode.className = "selected";
    return event.target.parentNode.id;
  }
}

function game(event) {
  let winPossibilities = {"rock":"scissors", "scissors":"paper", "paper":"rock"};
  let computer = computerPlay();
  let player = playerPlay(event);
  let result;
  if (winPossibilities[computer] === player.toLowerCase()) {
    result = "Sorry. You lost!";
  } else if (computer === player) {
    result = "It's a tie!";
  } else {
      result = "Congratulations, you won!";
  }

  document.querySelector(".popup p").textContent = result;
  document.querySelector(".popup-container").style.display = "block";
}

document.addEventListener("click", game);