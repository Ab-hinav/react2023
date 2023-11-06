export default function GameOver({winner,draw , resetGame }){
    
    
    
    return <div id ="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && draw && <p>Its Draw!</p>}
        <p>
            <button onClick={resetGame}>Rematch !</button>
        </p>
    </div>
}