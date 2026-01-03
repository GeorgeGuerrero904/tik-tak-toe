import Cell from "./Cell";
import { useGameInfo } from '../../context/gameContext'
import { useNavigate } from "react-router-dom";

function Board() {

    const { game, playTurn } = useGameInfo();
    const navigate = useNavigate();
    if(!game.players[0].name || !game.players[1].name){
        navigate('/');
    }
    return (
        <>
            <div id="playeDisplay">
                <h1>{game.gameState !== 'playing' ? `${game.players[game.currentPlayer].name} Won` : `${game.players[game.currentPlayer].name}'s Turn (${game.players[game.currentPlayer].symbol})`}</h1>
            </div>
            <table>
                <tbody>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 0 }} currentPlayer={game.currentPlayer} currentValue={game.board[0][0]} borderPosition='bottom right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 1 }} currentPlayer={game.currentPlayer} currentValue={game.board[0][1]} borderPosition='left bottom right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 2 }} currentPlayer={game.currentPlayer} currentValue={game.board[0][2]} borderPosition='left bottom' />
                    </tr>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 0 }} currentPlayer={game.currentPlayer} currentValue={game.board[1][0]} borderPosition='top right bottom' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 1 }} currentPlayer={game.currentPlayer} currentValue={game.board[1][1]} borderPosition='top right bottom left' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 2 }} currentPlayer={game.currentPlayer} currentValue={game.board[1][2]} borderPosition='top left bottom' />
                    </tr>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 0 }} currentPlayer={game.currentPlayer} currentValue={game.board[2][0]} borderPosition='top right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 1 }} currentPlayer={game.currentPlayer} currentValue={game.board[2][1]} borderPosition=' left right top' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 2 }} currentPlayer={game.currentPlayer} currentValue={game.board[2][2]} borderPosition='left top' />
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Board;