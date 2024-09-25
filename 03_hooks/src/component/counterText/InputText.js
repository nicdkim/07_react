function InputText({text,onChangeText}) {
    return (
        <>
            <input type="text" value={text} onChange={(e)=> onChangeText(e.target.value)}/>
            <p>입력한 텍스트 : {text}</p>
        </>
    )
}

export default InputText;