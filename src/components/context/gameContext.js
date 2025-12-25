import { createContext, useContext } from 'react';
import useGame from '../hooks/useGame';

const GameContext = createContext(null);

export function GameProvider({ children }) {
    const game = useGame();

    return (
        <GameContext.Provider value={game}>
            {children}
        </GameContext.Provider>
    );
}

export const useGameInfo = () => useContext(GameContext);