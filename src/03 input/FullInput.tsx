import React, {useState} from 'react'

type FullInputProps = {
    callBack: (newMessage: {message: string})=>void
}

export const FullInput = (props:FullInputProps) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = (title: string) => {
        let newMessage = {message: title}
        props.callBack(newMessage)
        setTitle('')
    }

    return (
        <>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={() => {
                    onClickButtonHandler(title)
                }}>+
                </button>
            </div>
        </>
    );
}