import React, {useState} from 'react'
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import {Button} from "./Button";

export const InputWithButton = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [title, setTitle] = useState('')

    const addMessage = () => {
        let newMessage = {message: title}
        setTitle('')
        setMessage((prev)=> [...prev, newMessage])
    }

    return (
        <>
            {/*<FullInput callBack={addMessage}/>*/}
            <Input value={title} setTitle={setTitle}/>
            <Button title='+' callBack={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </>
    );
}