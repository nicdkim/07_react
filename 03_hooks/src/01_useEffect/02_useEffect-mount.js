import { useEffect, useState } from "react";

const UseEffectMount = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("마운트 시점 동작");
    },
        []  // 두번째로 인자로 빈 배열을 넣으면 업데이트 시점에는 동작하지 않고 최초 마운트에만 동작
    );

    return (
        <>
            <button onClick={()=> setTime(new Date().toLocaleTimeString())}>
                현재시간 확인
            </button>
            <h1>{time}</h1>
        </>
    )
}

export default UseEffectMount;