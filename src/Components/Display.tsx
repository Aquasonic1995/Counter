import React from 'react';
const display = {
    width: '100%',
    minHeight: '100px',
}
const counter = {
    width: '90%',
    margin: "0 auto",
    border: '4px solid grey',
    fontSize: '90px',
    fontWeight: 'bold'
}
const styleIfCountOff = {
    color: 'red',
}
const styleIfCountReset = {
    color: 'white',
}
type displayPropsType = {
    count: number
    maxCount: number
}
const Display: React.FC<displayPropsType> = (props) => {
    return (
        <div style={display}>
            <div style={counter}>
                <span style={props.count === props.maxCount ? styleIfCountOff : styleIfCountReset}>{props.count}</span>
            </div>
        </div>
    );
};

export default Display;