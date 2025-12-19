
function Cell({ borderPosition, pickCell, currentValue, currentPlayer, currentPosition }) {
    return (
        <td className={`cellWrapper ${borderPosition}`} onClick={()=> pickCell(currentPosition, currentPlayer)}>
            <div className="cell">
                {currentValue}
            </div>
        </td>
    );
}

export default Cell;