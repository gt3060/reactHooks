import React, { useState,useEffect } from 'react';

function Example1 () {
    const [temp, setCount] = useState(0);
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${temp} times`);
    })
    return (
        <div>
            <div>
                clickResult is {temp}
            </div>
            <button onClick={()=>{setCount(temp+1)}} style={{marginTop:"20px",marginBottom:"20px"}}>click this</button>
        </div>
    );
}
    

export default Example1;