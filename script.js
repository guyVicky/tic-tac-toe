console.log("yo");

const org = ["1", "1", "1", "1", "1", "1", "1", "1", "1"];
let pieces = ["1", "1", "1", "1", "1", "1", "1", "1", "1"];

let turn = 1; //1 means player 1...0 means 2

function checkVictory() {
  console.log("💨");
}

function resetBoard() {
  pieces = org.map((x) => x);
  updateBoard();
}

function updateBoard() {
  for (let i = 0; i < 9; i++) {
    if (pieces[i] != "1") {
      if (pieces[i] == "O") {
        document.getElementById(i).style.backgroundColor = "#a1eeff";
      } else {
        document.getElementById(i).style.backgroundColor = "#4e1100";
      }
    } else {
      document.getElementById(i).style.backgroundColor = "#ffffff";
    }
  }
  checkVictory();
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
    });
    board.appendChild(cell);
  }
}
genCells();
