import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type propsInputType = DefaultInputPropsType & {
    callBack: (value: number) => void
}
export const Input = (props: propsInputType) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(+e.currentTarget.value)
    }
    return(
        <input value={props.value} className={props.className} onChange={onChangeCallback} type={props.type}/>
    )
}


export default Input;