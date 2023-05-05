import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type propsInputType = DefaultInputPropsType & {
    callBack: (value: number) => void
    checkValue: () => void
}
export const Input = (props: propsInputType) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(+e.currentTarget.value)
    }
    const onBlurCallBack = () => {
        props.checkValue()
    }
    return(
        <input value={props.value} className={props.className} onChange={onChangeCallback} onBlur={onBlurCallBack}  type={props.type}/>
    )
}


export default Input;