import './App.css';
import Board from './components/Board.js';
import { GameProvider } from './components/context/gameContext.js';

function App() {
  return (
    <GameProvider>
      <div id='siteWrapper'>
        <Board></Board>
        <div id='mediaQueryViewer'></div>
      </div>
    </GameProvider>
  );
}

export default App;
