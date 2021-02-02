import React, { useReducer, useState } from 'react';

function Reducer(state, action) {
    switch (action.type){
        case 'INCREMENT':
            return {value: state.value + 1}
        case 'DECREMENT':
            return {value: state.value - 1}
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(Reducer, {value : 0})
    return(
        <>
        <h1>현재 카운터 값은 {state.value}입니다.</h1>
        <button onClick={()=>{ dispatch({type: 'INCREMENT'})}}> + 1</button>
        <button onClick={()=>{ dispatch({type: 'DECREMENT'})}}> - 1</button>
        </>

    )
}

export default Counter;