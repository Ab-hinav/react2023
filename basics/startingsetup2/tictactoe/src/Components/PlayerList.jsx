import Player from "./Player";

const PLAYERS = {
  X: "PLAYER 1",
  O:"PLAYER 2"
}

export default function PlayerList({ currentActive, onChangeName }) {
  return (
    <ol id="players" className="highlight-player">
      <Player
        name={PLAYERS.X}
        symbol="X"
        currentActive={currentActive == "X"}
        onChangeName={onChangeName}
      />
      <Player
        name={PLAYERS.O}
        symbol="O"
        currentActive={currentActive == "O"}
        onChangeName={onChangeName}
      />
    </ol>
  );
}
