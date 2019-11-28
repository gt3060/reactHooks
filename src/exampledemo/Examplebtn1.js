import React, { useContext }  from 'react';
import { ColorContext, UPDATE_COLOR } from './Change'

function Examplebtn1(){
    const {dispatch} = useContext(ColorContext)
    return(
        <div>
            <button style={{marginTop:"20px",marginRight:"20px"}} onClick={()=>{dispatch({type:UPDATE_COLOR,color:"red"})}}>红色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:"yellow"})}}>黄色</button>
        </div>
    )
}
export default Examplebtn1