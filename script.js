const o = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
</svg>`;
const x = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;

const container = document.getElementById("container");
let currentPlayer = "x";
let board = Array(9).fill(null);

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const mapIcons = (e) => {
  const tile = document.getElementById(e.target.id);
  const index = +e.target.id;
  board[index] = currentPlayer;
  currentPlayer = currentPlayer === "x" ? "o" : "x";

  tile.innerHTML = "";
  tile.innerHTML = currentPlayer === "x" ? o : x;

  if (checkWinner()) {
    console.log(checkWinner());

    return;
  }
};

const checkWinner = () => {
  for (let [a, b, c] of winPattern) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
};

container.addEventListener("click", (e) => mapIcons(e));
