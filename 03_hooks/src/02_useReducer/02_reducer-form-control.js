import { useReducer } from "react";

const reducer = (state,action) => {
    console.log(action);
    return ({
        ...state,
        [action.name] : action.value
    })
}

export const Input = () => {
    
    const [state,dispatch] = useReducer(reducer,{
        pass: '',
        passcheck: ''
    });

    const onChangeHandler = e => dispatch(e.target);

    return (
        <>
            <label>비밀번호 : </label>
            <input type="password" name="pass" onChange={onChangeHandler}/>
            <br/>
            <label>비밀번호 확인 : </label>
            <input type="password" name="passcheck" onChange={onChangeHandler}/>

            <div>
                <h3>입력한 비번 : {state.pass}</h3>
                <h3>비번 확인 : {state.passcheck}</h3>
            </div>
        </>
    )
}


const ReducerFormControl = () => {
    
    const [state,dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const {name,nickname} = state;
    const onChangeHandler = e => dispatch(e.target);

    return (
        <>
            <Input/>
            <label>이름 : </label>
            <input type="text" name="name" onChange={onChangeHandler}/>
            <br/>
            <label>닉네임 : </label>
            <input type="text" name="nickname" onChange={onChangeHandler}/>

            <div>
                <h3>입력한 이름 : {name}</h3>
                <h3>입력한 닉네임 : {nickname}</h3>
            </div>
        </>
    )
}

export default ReducerFormControl;