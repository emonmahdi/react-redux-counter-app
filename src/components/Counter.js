import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from '../services/actions/counterAction';

const Counter = () => {
    const  count = useSelector(state =>  state.count );
   
    const dispatch = useDispatch();

    const handleIncrementCount = () => {
         dispatch(incrementAction())
    }
    const handleResetCount = () => {
        dispatch(resetAction())
    }
    const handleDecrementCount = () => {
        dispatch(decrementAction())
    }

    return (
        <div style={{background: '#ddd', padding: '50px'}}>
            <h2>Counter App</h2>
            <h1>Count: <span style={{color: 'blue'}}>{count} </span> </h1>
            <button style={{padding: '10px 20px', margin: '10px', background: '#000', color: '#fff', cursor: 'pointer', borderRadius: '5px',}} onClick={handleDecrementCount}>DeCrement</button>
            <button style={{padding: '10px 20px', margin: '10px', background: '#000', color: '#fff', cursor: 'pointer', borderRadius: '5px',}} onClick={handleResetCount}>Reset</button>
            <button style={{padding: '10px 20px', margin: '10px', background: '#000', color: '#fff', cursor: 'pointer', borderRadius: '5px',}} onClick={handleIncrementCount}>InCrement</button>
            
            
        </div>
    );
};

export default Counter;



// state - 0
// actions - increment, decrement, reset
// reducer - increment -> count => count + 1
//         - decrement -> count => count - 1
//         - Reset -> count => 0
// store
// Providing data to store
// use store