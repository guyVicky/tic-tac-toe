console.log("yo");

const org = ["1", "1", "1", "1", "1", "1", "1", "1", "1"];
let pieces = ["1", "1", "1", "1", "1", "1", "1", "1", "1"];

let turn = 0; //0 means player 1...1 means 2

function checkVictory() {
  let flag = 0;
  for (let i = 0; i < 9; i += 3) {
    if (
      pieces[i] === pieces[i + 1] &&
      pieces[i + 1] === pieces[i + 2] &&
      pieces[i] !== "1"
    ) {
      flag = 1;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      pieces[i] === pieces[i + 3] &&
      pieces[i + 3] === pieces[i + 6] &&
      pieces[i] !== "1"
    ) {
      flag = 1;
    }
  }
  if (
    (pieces[0] === pieces[4] && pieces[4] === pieces[8] && pieces[0] !== "1") ||
    (pieces[2] === pieces[4] && pieces[4] === pieces[6] && pieces[2] !== "1")
  ) {
    flag = 1;
  }
  if (flag === 0) {
    return;
  }
  let curpl = turn ? "1" : "2";
  alert("Player " + curpl + " wins!");
  resetBoard();
}

function resetBoard() {
  pieces = org.map((x) => x);
  updateBoard();
}

function updateBoard() {
  for (let i = 0; i < 9; i++) {
    if (pieces[i] != "1") {
      if (pieces[i] == "O") {
        document.getElementById(i).style.backgroundImage =
          "url('./assets/noughts.png')";
      } else {
        document.getElementById(i).style.backgroundImage =
          "url('./assets/crosses.png')";
      }
    } else {
      document.getElementById(i).style.backgroundImage = "";
    }
  }
}

function changeValue(c) {
  if (pieces[c.id] == "1") {
    pieces[c.id] = turn ? "O" : "X";
    turn = !turn;
  }
}

function genCells() {
  let board = document.querySelector(".board");
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = i;
    cell.addEventListener("click", (event) => {
      changeValue(event.target);
      updateBoard();
      checkVictory();
    });
    board.appendChild(cell);
  }
}
genCells();
