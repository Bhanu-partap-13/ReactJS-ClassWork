import React, { useState, useEffect, useRef } from "react";

function Countdown() {
    const [time, setTime] = useState(10);
    const intervalRef = useRef(null);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    return (
        <div>
            <div>
                <div>Countdown</div>
                <div className={`time ${time === 0 ? "times-up" : ""}`}>
                    {time === 0 ? "Time's up!" : time}
                </div>
            </div>
        </div>
    );
}
export default Countdown;