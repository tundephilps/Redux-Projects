import React, { useState } from 'react'
import "./Counter.scss";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";


function Counter() {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState("");

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }



  return (
    <div class="container">
      <div class="box">
        <div class="top">
          <h1 id="font">Counter</h1>
        </div>
        <div class="middle">
          <h2 id="numbers">{count}</h2>
        </div>
        <div class="bottom">
          <button id="increment" onClick={() => dispatch(increment())}>Add Count</button>
          <button id="decrement" onClick={resetAll}>Reset</button>
          <button id="decrement" onClick={() => dispatch(decrement())}>Lower Count</button>
        
        
</div>
<div class="bottom">
<button id="decrement" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
<input type="text" id="input" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />

    
</div>
      </div>
    </div>

  )
}

export default Counter