import { useGameInfo } from '../../context/gameContext'

function Cell({ borderPosition, pickCell, currentValue, currentPlayer, currentPosition }) {
    const { game } = useGameInfo();

    return (
        <td className={`cellWrapper ${borderPosition}`} onClick={() => pickCell(currentPosition, currentPlayer)}>
            <div className={`cell ${game.board[currentPosition.x][currentPosition.y].winner === true ? 'winner' : ''}`}>
                {currentValue}
            </div>
        </td>
    );
}

export default Cell;