import { useState } from "react";
import { useGameInfo } from "../context/gameContext";

export function useInitScreen() {
    const [errors, setErrors] = useState([]);
    const { setPlayers } = useGameInfo();
    const [initPlayers, setInitPlayers] = useState([{ name: '', symbol: '' }, { name: '', symbol: '' }]);
    
    const formAction = async (formData) => {
        const playerOne = formData.get("playerOne");
        const playerTwo = formData.get("playerTwo");
        const newErrors = [];

        if (!playerOne || !playerTwo) {
            newErrors.push("You have to enter names for both players.");
        }
        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }
        //asigning a sign to each player and setting them in the game context
        setErrors([]);
        const newPlayers = [...initPlayers];
        newPlayers[0] = { name: playerOne, symbol: asignSymbol() };
        newPlayers[1] = { name: playerTwo, symbol: asignSymbol(newPlayers[0].symbol) };
        setInitPlayers(newPlayers);
        
        setPlayers(newPlayers.sort((x) => x.symbol === 'x' ? -1 : 1));
    };

    function asignSymbol(symbol) {
        if (!!symbol) {
            return symbol === 'x' ? 'o' : 'x';
        }
        return 'x';
    }

    return { formAction, errors, initPlayers };
}