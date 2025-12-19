import Cell from "./Cell";
import { useState } from "react";

function Board() {

    const [gameBoard, setGameBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    const [player, setPlayer] = useState('x');
    const [gameState, setGameState] = useState('playing');

    const changePlayer = () => {
        setPlayer(player === 'x' ? 'o' : 'x');
    }

    const playTurn = ({ x, y }, currentTurn) => {
        if (gameState !== 'playing') {
            return;
        }

        console.log(`Updating cell at position (${x}, ${y}) for player ${currentTurn}`);
        let currentBoard = [...gameBoard];
        if (currentBoard[x][y] !== '') {
            return;
        }
        currentBoard[x][y] = currentTurn;
        setGameBoard(currentBoard);
        checkWinCondition();
        if (gameState === 'playing') {
            changePlayer();
        }
    }

    const checkWinCondition = () => {
        for (let i = 0; i < 3; i++) {
            //checking for win condition in x direction
            if (gameBoard[i][0] && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
                setGameState('win');
            }
            //checking for win condition in y direction
            if (gameBoard[0][i] && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
                setGameState('win');
            }
        }
    }
    return (
        <>
            <div id="playeDisplay">
                <h1>{gameState !== 'playing' ? `${player} won` : `Trun ${player}`}</h1>
            </div>
            <table>
                <tbody>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 0 }} currentPlayer={player} currentValue={gameBoard[0][0]} borderPosition='bottom right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 1 }} currentPlayer={player} currentValue={gameBoard[0][1]} borderPosition='left bottom right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 0, y: 2 }} currentPlayer={player} currentValue={gameBoard[0][2]} borderPosition='left bottom' />
                    </tr>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 0 }} currentPlayer={player} currentValue={gameBoard[1][0]} borderPosition='top right bottom' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 1 }} currentPlayer={player} currentValue={gameBoard[1][1]} borderPosition='top right bottom left' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 1, y: 2 }} currentPlayer={player} currentValue={gameBoard[1][2]} borderPosition='top left bottom' />
                    </tr>
                    <tr className="row">
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 0 }} currentPlayer={player} currentValue={gameBoard[2][0]} borderPosition='top right' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 1 }} currentPlayer={player} currentValue={gameBoard[2][1]} borderPosition=' left right top' />
                        <Cell pickCell={playTurn} currentPosition={{ x: 2, y: 2 }} currentPlayer={player} currentValue={gameBoard[2][2]} borderPosition='left top' />
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Board;