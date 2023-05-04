import React from 'react';
import Input from "./Input"
const displaySettings = {
    width: '90%',
    minHeight: '126px',
    margin: "0 auto",
    border: '4px solid grey',
}
type setDisplayPropsType = {
    getStartValue: (value: number) => void
    getMaxValue: (value: number) => void
}
const SetDisplay = (props:setDisplayPropsType) => {
    return (
        <div style={displaySettings}>
            <div className='counter__settings'><span>max value:</span> <Input callBack={props.getMaxValue} type={'number'}/>
            </div>
            <div className='counter__settings'><span>start value:</span> <Input callBack={props.getStartValue} type={'number'}/>
            </div>
        </div>
    );
};

export default SetDisplay;