import React, { useEffect, useState } from 'react';

function TimerList({timers = [], deleteTimer}) {
    return (
        <div>
            {timers.map((timer) => (
                <Timer key={timer.id} timer={timer} deleteTimer={deleteTimer}/>
            ))}
        </div>
    );
}

function Timer({timer, deleteTimer}) {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setSeconds((prevSeconds) => prevSeconds + 1);

            }, 1000);
            return () => clearInterval(interval);
        }, []);

        return (
            <div>
                <p>
                    타이머 {timer.id} : {seconds}초 
                </p>
                <button onClick={() => deleteTimer(timer.id)}>삭제</button>
            </div>
        )
    }

export default TimerList;