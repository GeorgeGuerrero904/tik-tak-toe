import { useState } from "react";

function useGame() {
    const [game, setGame] = useState({
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
        currentPlayer: 'x',
        gameState: 'playing',
        players: [
            {name:'', symbol:''},
            {name:'', symbol:''}
        ]
    });

    function changePlayer() {
        return game.currentPlayer === 'x' ? 'o' : 'x';
    }

    function someoneWon() {
        for (let i = 0; i < 3; i++) {
            //checking for win condition in x direction
            if (game.board[i][0] && game.board[i][0] === game.board[i][1] && game.board[i][1] === game.board[i][2]) {
                return true;
            }
            //checking for win condition in y direction
            if (game.board[0][i] && game.board[0][i] === game.board[1][i] && game.board[1][i] === game.board[2][i]) {
                return true;
            }
        }
        //checking for win condition in diagonal direction
        if (game.board[0][0] && game.board[0][0] === game.board[1][1] && game.board[1][1] === game.board[2][2]) {
            return true;
        }
        if (game.board[0][2] && game.board[0][2] === game.board[1][1] && game.board[1][1] === game.board[2][0]) {
            return true;
        }
    }

    function playTurn({ x, y }) {
        if (game.gameState !== 'playing') {
            return;
        }
        let currentBoard = [...game.board];
        if (currentBoard[x][y] !== '') {
            return;
        }
        currentBoard[x][y] = game.currentPlayer;
        const newGameState = someoneWon() ? 'win' : 'playing';
        const nextPlayer = newGameState === 'playing' ? changePlayer() : game.currentPlayer;
        setGame({
            board: currentBoard,
            currentPlayer: nextPlayer,
            gameState: newGameState
        });
    }

    return {
        game,
        playTurn
    };
}

export default useGame;