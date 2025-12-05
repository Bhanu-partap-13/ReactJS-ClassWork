import React, { useState, useEffect, useRef } from "react";

function Countdown() {
    const [time, setTime] = useState(10);
    const valRef = useRef(null);

    useEffect(() => {
        valRef.current = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    clearInterval(valRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (valRef.current) {
                clearInterval(valRef.current);
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