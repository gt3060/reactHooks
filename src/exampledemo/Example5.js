import React, { useContext } from 'react';
import { ColorContext } from './Change';


function Example5(){
    const {color} = useContext(ColorContext)    
    return (<div style={{color:color}}>字体颜色为{color}</div>)
}

export default Example5


