import { useState } from "react";
import ErrorMessage from "../global/ErrorMessage";
import { useGameInfo } from "../../context/gameContext";


function InitScreen() {

    const [errors, setErrors] = useState([]);
    const { setPlayers, game } = useGameInfo();
    const [playerOne, setPlayerOne] = useState({ name: '', symbol: '' });
    const [playerTwo, setPlayerTwo] = useState({ name: '', symbol: '' });

    const formAction = async (formData) => {
        const playerOne = formData.get("playerOne");
        const playerTwo = formData.get("playerTwo");
        const newErrors = [];

        if (!playerOne.name || !playerTwo.name) {
            newErrors.push("You have to enter names for both players.");
        }
        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }
        //asigning a sign to each player and setting them in the game context
        setErrors([]);
        const firstPlayerSymbol = asignSymbol();
        const players = [
            { name: playerOne, symbol: firstPlayerSymbol },
            { name: playerTwo, symbol: asignSymbol(firstPlayerSymbol) }
        ];

        setPlayers(players.sort((x) => x.symbol === 'x' ? -1 : 1));
    };

    function asignSymbol(symbol) {
        if (!!symbol) {
            return symbol === 'x' ? 'o' : 'x';
        }
        return 'x';
    }
    return (
        <form action={formAction} className="text-center">
            <div className="row">
                <div className="playerBox">
                    <label htmlFor="playerOne"> Player 1</label>
                    <input type="text" name="playerOne" value={playerOne.name} id="playerOne" />
                    {!!playerOne.symbol ? <span>({playerOne.symbol})</span> : null}
                </div>
                <div className="playerBox">
                    <label htmlFor="playerTwo">Player 2</label>
                    <input type="text" name="playerTwo" value={playerTwo.name} id="playerTwo" />
                    {!!playerTwo.symbol ? <span>({playerTwo.symbol})</span> : null}
                </div>
            </div>
            {errors.length > 0 ? errors.map((error, index) => (
                <ErrorMessage key={index} message={error} />
            )) : null}
            <button>Asign Players</button>
        </form>
    );
}

export default InitScreen;