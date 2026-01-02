import ErrorMessage from "../global/ErrorMessage";
import { useInitScreen } from "../../hooks/useInitScreen";
import Player from "./Player.js";
import Timer from "./Timer.js";


function InitScreen() {
    const { formAction, errors, initPlayers } = useInitScreen();

    return (
        <form action={formAction} className="text-center">
            <div className="row">
                <div className="playerBox">
                    <label htmlFor="playerOne" className="playerLabel"> Player 1</label>
                    {!!initPlayers[0].name ? <Player player={initPlayers[0]} /> : <input type="text" name="playerOne" id="playerOne" className="playerInput" />}
                </div>
                <div id="vsBox">
                    vs
                </div>
                <div className="playerBox">
                    <label htmlFor="playerTwo" className="playerLabel">Player 2</label>
                    {!!initPlayers[1].name ? <Player player={initPlayers[1]} /> : <input type="text" name="playerTwo" id="playerTwo" className="playerInput" />}
                </div>
            </div>
            {errors.length > 0 ? errors.map((error, index) => (
                <ErrorMessage key={index} message={error} />
            )) : null}

            {!!initPlayers[0].name && !!initPlayers[1].name ? <Timer /> : <button type="submit" className="submitButton">Asign Players</button>}

        </form>
    );
}

export default InitScreen;