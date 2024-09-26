import { useContext, useState } from "react"

const useInput = () => {
    const [value, setValue] = useState("");

    const onChange = e => setValue(e.target.value);

    return {value, onChange};
}

const CustomHooks = () => {
    const name = useInput();
    const pass = useInput();
    const email = useInput();

    return (
        <>
            <label>이름 : </label>
            <input type="text" value={name.value} onChange={name.onChange}/>
            <br/>
            <labe>비밀번호 : </labe>
            <input type="password" {...pass}/>
            <br/>
            <labe>이메일 : </labe>
            <input type="text" {...email}/>

            <h4>name : {name.value}</h4>
            <h4>pass : {pass.value}</h4>
            <h4>email : {email.value}</h4>
        </>
    )
}

export default CustomHooks;