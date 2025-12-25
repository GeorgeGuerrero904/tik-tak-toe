import Cell from "./Cell";
import { useGameInfo } from '../components/context/gameContext'

function Board() {

    const { game, playTurn } = useGameInfo();

    return (
        <>
            <div id="playeDisplay">
                <h1>{game.gameState !== 'playing' ? `${game.currentPlayer} Won` : `Turn ${game.currentPlayer}`}</h1>
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