import React, {useState} from 'react';
import './App.css';
import Display from "./Components/Display";
import Button from "./Components/Button";

function App() {
  const maxCount = 5;
  const minCount = 0;
  let [count, setCount] = useState(minCount);
  const getCounterIncrement = () => {
    if (count === maxCount) {
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
          <Display maxCount={maxCount} count={count}/>
          <div className="button__group">
            <Button disabled={count === maxCount} name={'Inc'} callBack={getCounterIncrement}/>
            <Button disabled={count === minCount} name={'Reset'} callBack={getResetICount}/>
          </div>
        </div>
        <div className="wrapper-counter wrapper-counter__setting">

        </div>
      </div>
  );
}

export default App;
