
import useCountdown from "../../hooks/useCountdown";
import { useNavigate } from "react-router-dom";

function Timer() {
    const { seconds } = useCountdown(10);
    const navigate = useNavigate();

    if (seconds === 0) {
        navigate('/game');
    }
    return (
        <div>
            <h1>All set, the game will start in: {seconds}s</h1>
        </div>
    );
}
export default Timer;