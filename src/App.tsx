import React, {useState} from 'react';
import './App.css';
import Display from "./Components/Display";
import Button from "./Components/Button";
import SetDisplay from "./Components/SetDisplay";

function App() {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    let [count, setCount] = useState(startValue);
    let [error, setError] = useState('')
    const getStartValue = (value: number) => {
        if (value > 0) {
            setStartValue(value)
            setError('')
        } else {
            setError('enter a number greater than zero')
        }
    }

    const getMaxValue = (value: number) => {
        if (value >= 0) {
            setMaxValue(value)
            setError('')
        } else {
            setError('enter a number greater than zero')
        }
    }
    const onClickSetValue = () => {
        if (startValue < maxValue) {
            setCount(startValue)
        }
    }
    const getCounterIncrement = () => {
        if (count === maxValue) {
            count = startValue;
            setCount(count);
        }
        setCount(++count);
    }
    const getResetICount = () => {
        setCount(startValue);
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
                <SetDisplay error={error} maxValue={maxValue} startValue={startValue} getStartValue={getStartValue}
                            getMaxValue={getMaxValue}/>
                <div className="button__group button__group_settings">
                    <Button disabled={startValue > maxValue} name={'Set'} callBack={onClickSetValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
