import "./App.css";
import GameBoard from "./Components/GameBoard";
import PlayerList from "./Components/PlayerList";
import { useState } from "react";
import Log from "./Components/Log";
import GameOver from "./Components/GameOver";

function getCurrentActiveSymbol(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player == "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

const GAME = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function updateShadowBoard(gameTurns) {
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    GAME[row][col] = player;
  }

  return GAME;
}

function printShadowBoard(shadowBoard) {
  for (const row of shadowBoard) {
    console.log(row);
  }
}

function checkIfWon(gameTurns) {
  const shadowBoard = updateShadowBoard(gameTurns);

  const won = shadowBoard.some((row) => {
    return row.every((symbol) => symbol && symbol === row[0]);
  });

  if (won) {
    return true;
  }

  //col check
  let col = false;
  // printShadowBoard(shadowBoard);
  for (let i = 0; i < 3; i++) {
    col = true;
    for (let j = 0; j < 3; j++) {
      if (!shadowBoard[j][i]) {
        col = false;
        break;
      }
      if (shadowBoard[j][i] && shadowBoard[j][i] !== shadowBoard[0][i]) {
        col = false;
        break;
      }
    }
    if (col == true) {
      return true;
    }
  }

  //diagonal check
  let dwon = true;
  for (let i = 0; i < 3; i++) {
    if (shadowBoard[i][i] && shadowBoard[i][i] !== shadowBoard[0][0]) {
      dwon = false;
      break;
    }
    if (!shadowBoard[i][i]) {
      dwon = false;
      break;
    }
  }
  if (dwon == true) {
    return true;
  } else {
    dwon = true;
  }
  // anti diagonal check
  for (let i = 2; i >= 0; i--) {
    if (shadowBoard[i][2 - i] && shadowBoard[i][2 - i] !== shadowBoard[2][0]) {
      dwon = false;
      break;
    }

    if (!shadowBoard[i][2 - i]) {
      dwon = false;
      break;
    }
  }
  console.log(won, dwon);
  return won || dwon;
}

function checkIfDraw(gameTurns) {
  const playedTurns = gameTurns.length;
  const currTurns = GAME.length * GAME[0].length;

  return playedTurns == currTurns;
}

function App() {
  const [gameTurns, setGameTurn] = useState([]);
  const [players,setPlayers] = useState({X:'Player 1',O:'Player 2'});


  const active = getCurrentActiveSymbol(gameTurns);
  const won = checkIfWon(gameTurns);
  const draw = checkIfDraw(gameTurns);

  function handlePlayerNameChange(symbol,newName){
    setPlayers((prevPlayers) => {
      return {...prevPlayers,[symbol]:newName}
    });
  }

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurn((prevTurns) => {
      const currPlayer = getCurrentActiveSymbol(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  function resetGame() {
    GAME.forEach((row) => {
      row.fill(null);
    });
    setGameTurn([]);
    console.log(GAME);
    return GAME;
  }

  let gameContent = "";

  if (won === true) {
    // find prev active player symbol
    let winner = active === "X" ? "O" : "X";
    winner = players[winner];
    gameContent = (
      <GameOver  winner={winner} resetGame={resetGame} />
    );
  } else if (draw === true) {
    gameContent = <GameOver draw={true} resetGame={resetGame} />;
  }

  return (
    <main>
      <div id="game-container">
        <PlayerList currentActive={active} onChangeName={handlePlayerNameChange} ></PlayerList>
        {gameContent}
        <GameBoard gameBoard={GAME} handleSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  );
}

export default App;
