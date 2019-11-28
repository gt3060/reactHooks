import React, { useState, useEffect, createContext, useContext } from 'react';

const TempContext = createContext();

function Child(){
    let temp = useContext(TempContext);
    return(<div>传给子组件：{temp}</div>)
}

function Example3() {
    const [temp, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect=>You clicked ${temp} times`);
    })
    return (
        <div>
            <div>
                clickResult is {temp}
            </div>
            <button onClick={() => { setCount(temp + 1) }} style={{ marginTop: "20px", marginBottom: "20px" }}>click this</button>
            <TempContext.Provider value ={temp}>
                <Child />
            </TempContext.Provider>
            
        </div>
    );
}


export default Example3;