import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type buttonTypeProps = DefaultButtonPropsType & {
    name: string,
    callBack: () => void,
}
const Button: React.FC<buttonTypeProps> = (props) => {
    const onClickCallBackHandler = () => {
        props.callBack()
    }
    return (
        <button disabled={props.disabled} onClick={onClickCallBackHandler}>{props.name}</button>
    );
};

export default Button;