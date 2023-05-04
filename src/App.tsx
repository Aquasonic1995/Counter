import React, {useState} from 'react';
import './App.css';
import Display from "./Components/Display";
import Button from "./Components/Button";
import SetDisplay from "./Components/SetDisplay";

function App() {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const getStartValue = (value: number) => {
        setStartValue(value)
    }
    let [count, setCount] = useState(startValue);
    const getMaxValue = (value: number) => {
        setMaxValue(value)
    }
    const onClickSetValue = () => {
        setCount(startValue)
    }
    const getCounterIncrement = () => {
        if (count === maxValue) {
            count = 0;
            setCount(count);
        }
        setCount(++count);
    }
    const getResetICount = () => {
        setCount(0);
    }
    return (
        <div className="container">
            <div className="wrapper-counter">
                <Display maxCount={maxValue} count={count}/>
                <div className="button__group">
                    <Button disabled={count === maxValue} name={'Inc'} callBack={getCounterIncrement}/>
                    <Button disabled={count === startValue} name={'Reset'} callBack={getResetICount}/>
                </div>
            </div>
            <div className="wrapper-counter wrapper-counter__setting">
                <SetDisplay getStartValue={getStartValue} getMaxValue={getMaxValue}/>
                <div className="button__group button__group_settings">
                    <Button name={'Set'} callBack={onClickSetValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
