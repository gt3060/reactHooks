import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Interface() {
    useEffect(() => {
        console.log(`Welcome Interface!!!`);
        return ()=>{
            console.log("ByeBye Interface")
        } 
    },[])
    return <h2>接口测试</h2>
}

function Group() {
    useEffect(() => {
        console.log(`Welcome Group!!!`);
        return ()=>{
            console.log("ByeBye Group")
        }
    },[])
    return <h2>组件测试</h2>
}

function Example2() {
    const [temp, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect=>You clicked ${temp} times`);
        return ()=>{
            console.log("ByeBye temp")
        }
    },[temp])
    return (
        <div>
            <div>
                clickResult is {temp}
            </div>
            <button onClick={() => { setCount(temp + 1) }} style={{ marginTop: "20px", marginBottom: "20px" }}>click this</button>
            <Router>
                <ul>
                    <li><Link to="/">测试中心</Link></li>
                    <li><Link to="/group">组件中心</Link></li>
                </ul>
                <Route path="/" exact component={Interface} />
                <Route path="/group"  component={Group} />
            </Router>
        </div>
    );
}


export default Example2;