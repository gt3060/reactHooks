import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';



function Example4() {
    // const [temp] = useState(0);
    const [temp, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    },0)
    // useEffect(() => {
    //     console.log(`useEffect=>You clicked ${temp} times`);
    // })
    return (
        <div>
            <div>
                clickResult is {temp}
            </div>
            <button onClick={() => { dispatch('add') }} style={{ marginTop: "20px", marginBottom: "20px" }}>click add</button>
            <button onClick={() => { dispatch('sub') }} style={{ marginTop: "20px", marginBottom: "20px" }}>click sub</button>
            

        </div>
    );
}


export default Example4;