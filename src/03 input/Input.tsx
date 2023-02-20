import React, {useState} from 'react'

type InputPropsType = {
    value: string
    setTitle: (title: string)=>void
}

export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <>
            <input value={props.value} onChange={onChangeInputHandler}/>
        </>
    );
}