import React, {useReducer} from 'react';

import './App.css'

const reducer = (state, action) => {
    state = {...state, count2:state.count2 + 2}
    state = {...state, count3:state.count3 + 5}

    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'des':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}
        case 'set':
            return {...state, count1: action.payload}
        default:
            throw new Error('Error')
    }
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div>
            <div className="Count">{state.count1}</div>
            <div className="Count">{state.count2}</div>
            <div className="Count">{state.count3}</div>
            <button className="Button" onClick={() => dispatch({type: 'inc'})}>INC</button>
            <button className="Button" onClick={() => dispatch({type: 'des'})}>DES</button>
            <button className="Button" onClick={() => dispatch({type: 'reset'})}>RESET</button>
            <button className="Button" onClick={() => dispatch({type: 'set', payload:10})}>SET</button>
        </div>
    );
};

export default App;