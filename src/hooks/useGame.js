import { useState } from "react";

function useGame() {
    const [game, setGame] = useState({
        board: [
            [{ winner: false, move: '' }, { winner: false, move: '' }, { winner: false, move: '' }],
            [{ winner: false, move: '' }, { winner: false, move: '' }, { winner: false, move: '' }],
            [{ winner: false, move: '' }, { winner: false, move: '' }, { winner: false, move: '' }]
        ],
        currentPlayer: 0,
        gameState: 'playing',
        players: [
            { name: '', symbol: '' },
            { name: '', symbol: '' }
        ]
    });

    function changePlayer() {
        //if it's currentPlayer is 0  then asign 1 if 1 asign 0
        return 1 - game.currentPlayer;
    }

    function someoneWon() {
        for (let i = 0; i < 3; i++) {
            //checking for win condition in x direction
            if (game.board[i][0].move && game.board[i][0].move === game.board[i][1].move && game.board[i][1].move === game.board[i][2].move) {
                game.board[i][0].winner = true;
                game.board[i][1].winner = true;
                game.board[i][2].winner = true;
                return true;
            }
            //checking for win condition in y direction
            if (game.board[0][i].move && game.board[0][i].move === game.board[1][i].move && game.board[1][i].move === game.board[2][i].move) {
                game.board[0][i].winner = true;
                game.board[1][i].winner = true;
                game.board[2][i].winner = true;
                return true;
            }
        }
        //checking for win condition in diagonal direction
        if (game.board[0][0].move && game.board[0][0].move === game.board[1][1].move && game.board[1][1].move === game.board[2][2].move) {
            game.board[0][0].winner = true;
            game.board[1][1].winner = true;
            game.board[2][2].winner = true;
            return true;
        }
        if (game.board[0][2].move && game.board[0][2].move === game.board[1][1].move && game.board[1][1].move === game.board[2][0].move) {
            game.board[0][2].winner = true;
            game.board[1][1].winner = true;
            game.board[2][0].winner = true;
            return true;
        }
    }

    function playTurn({ x, y }) {
        if (game.gameState !== 'playing') {
            return;
        }
        let currentBoard = [...game.board];
        if (currentBoard[x][y].move !== '') {
            return;
        }
        currentBoard[x][y].move = game.players[game.currentPlayer].symbol;
        const newGameState = someoneWon() ? 'win' : 'playing';
        const nextPlayer = (newGameState === 'playing') ? changePlayer() : game.currentPlayer;
        setGame({
            ...game,
            board: currentBoard,
            currentPlayer: nextPlayer,
            gameState: newGameState
        });
    }

    function setPlayers(players) {
        setGame((prevGame) => ({
            ...prevGame,
            players: players
        }));
    }

    function gameInitCorrectly() {
        return (!!game.players[0].name && !!game.players[1].name);
    }
    function resetGame() {
        setGame({
            board: [
                [{ winner: false, move: '' }, { winner: false, move: '' }, { winner: false, move: '' }],
                [{ winner: false, move: '' }, { winner: false, move: '' }, { winner: false, move: '' }],
                [{ winner: false, move: '' }, { winner: false, move: '' }, { winner: false, move: '' }]
            ],
            currentPlayer: 0,
            gameState: 'playing',
            players: game.players
        });
    }
    return {
        game,
        playTurn,
        setPlayers,
        gameInitCorrectly,
        resetGame
    };
}

export default useGame;