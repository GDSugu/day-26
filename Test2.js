import React,{useContext} from "react";
import {CountContext,ThemeContext} from "./context"


function Test2() {
    const theme = useContext(ThemeContext)
    const counting = useContext(CountContext) 

    return (
        <>
            <div style={theme.styles}>
                <h3>Test2 Component</h3>
                <p>Count-{counting.count}</p>
                <button className="btn btn-primary" onClick={counting.increment}>Increment</button>{"    "}
                <button className="btn btn-warning" onClick={counting.decrement}>Decrement</button>{"    "}
                <button className="btn btn-success" onClick={counting.reset}>Reset</button>
            </div>
        </>
    )



}

export default Test2;