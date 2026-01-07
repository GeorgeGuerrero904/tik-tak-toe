import Cell from "./Cell";
import { useGameInfo } from '../../context/gameContext'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FireworksAnimated from "../global/FireworksAnimated";

function Board() {

    const { game, playTurn, gameInitCorrectly, resetGame } = useGameInfo();
    const navigate = useNavigate();

    useEffect(() => {
        const shouldRedirect = !gameInitCorrectly();

        if (shouldRedirect) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <>
            {game.gameState !== 'playing' ? <FireworksAnimated /> : null}
            <div id="playeDisplay">
                <h1>{game.gameState !== 'playing' ? `${game.players[game.currentPlayer].name} Won` : `${game.players[game.currentPlayer].name}'s Turn (${game.players[game.currentPlayer].symbol})`}</h1>
            </div>
            <table>
                <tbody>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 0 }} currentPlayer={game.currentPlayer} currentValue={game.board[0][0].move} borderPosition='bottom right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 1 }} currentPlayer={game.currentPlayer} currentValue={game.board[0][1].move} borderPosition='left bottom right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 2 }} currentPlayer={game.currentPlayer} currentValue={game.board[0][2].move} borderPosition='left bottom' />
                    </tr>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 0 }} currentPlayer={game.currentPlayer} currentValue={game.board[1][0].move} borderPosition='top right bottom' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 1 }} currentPlayer={game.currentPlayer} currentValue={game.board[1][1].move} borderPosition='top right bottom left' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 2 }} currentPlayer={game.currentPlayer} currentValue={game.board[1][2].move} borderPosition='top left bottom' />
                    </tr>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 0 }} currentPlayer={game.currentPlayer} currentValue={game.board[2][0].move} borderPosition='top right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 1 }} currentPlayer={game.currentPlayer} currentValue={game.board[2][1].move} borderPosition=' left right top' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 2 }} currentPlayer={game.currentPlayer} currentValue={game.board[2][2].move} borderPosition='left top' />
                    </tr>
                </tbody>
            </table>
            {game.gameState !== 'playing' ? <button className="submitButton" id="resetBtn" onClick={resetGame}> Reset Game</button> : null}
        </>
    );
}

export default Board;