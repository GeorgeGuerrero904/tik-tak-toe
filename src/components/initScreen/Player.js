function Player({ player }) {
    return (
        <div className="playerLeyend">
            <div className="playerName">{player.name}</div>
            <div className="playerSymbol">{player.symbol}</div>
        </div>
    );
}

export default Player;