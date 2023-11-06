

export default function GameBoard({ gameBoard, handleSelectSquare }) {
  

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button disabled={playerSymbol !== null}
                      onClick={() =>
                        // updateWithSymbol(rowIndex, colIndex)
                        handleSelectSquare(rowIndex, colIndex)
                      }
                      key={colIndex}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
