import React, { useState } from 'react';

function Example (){
    const [temp, setCount] = useState(0);
    return (
        <div>
            <div>
                clickResult is {temp}
            </div>
            <button onClick={()=>{setCount(temp+1)}} style={{marginTop:"20px",marginBottom:"20px"}}>click this</button>
        </div>
    );
}

export default Example;