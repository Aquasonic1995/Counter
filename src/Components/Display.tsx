import React from 'react';

const display = {
    width: '100%',
    minHeight: '100px',
}
const count = {
    fontSize: '90px',
    fontWeight: '900'
}

type displayPropsType = {
    count: number
    maxCount: number
    error: string
}
const Display: React.FC<displayPropsType> = (props) => {
    console.log(props.error)
    return (
        <div style={display}>
            <span className={props.error ? 'errorText' : ''}>{props.error}</span>

            <div className='counter'>
        <span style={count}
              className={props.count === props.maxCount ? 'styleIfCountOff' : 'styleIfCountReset'}>{props.count}</span>
            </div>
        </div>
    );
};

export default Display;