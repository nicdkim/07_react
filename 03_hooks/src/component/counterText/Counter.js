
function Counter({counter, onIncrement, onDecrement}) {
    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button>
        </>
    )
}

export default Counter;