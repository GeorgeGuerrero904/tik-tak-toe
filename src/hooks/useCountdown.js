import { useState, useEffect, useRef } from 'react';

function useCountdown(initialSeconds) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(true);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isActive && seconds > 0) {
            timerRef.current = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(timerRef.current);
            setIsActive(false);
        }
        return () => clearInterval(timerRef.current);
    }, [isActive, seconds]);

    return { seconds };
};

export default useCountdown;