import React, { useReducer } from 'react';
import Example5 from './Example5';
import Examplebtn1 from './Examplebtn1';
import { Color } from './Change';   //引入Color组件

function Example6(){
    return (
        <div>
            <Color>
                <Example5 />
                <Examplebtn1 />
            </Color>
            
        </div>
    )
}

export default Example6