import './App.css';
import Board from './components/game/Board.js';
import InitScreen from './components/initScreen/InitScreen.js';
import { GameProvider } from './context/gameContext.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <div id='siteWrapper'>
          <Routes>
            <Route path='/game' element={<Board />} />
            <Route path='/' element={<InitScreen />}/>
          </Routes>
          <div id='mediaQueryViewer'></div>
        </div>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
