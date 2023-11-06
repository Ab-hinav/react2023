import { useState } from "react";

export default function Player({ name, symbol ,currentActive,onChangeName}) {
  const [editing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  let content = <span className="player-name">{playerName}</span>;

  function handleEditClick() {
    setEditing((editing) => !editing);
    // dont do like setEditing(!editing)

    if(editing) {
      onChangeName(symbol,playerName);
    }
  }

  

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  if (editing) {
    content = (
      <input
        type="text"
        value={playerName}
        required
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className={currentActive ? 'active':null}>
      <span className="player">
        {content}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button className="button" onClick={handleEditClick}>
        {editing == true ? "Save" : "Edit"}
      </button>
    </li>
  );
}
