


import React, {useState} from "react";

import Test1 from "./Test1";

import {CountContext, ThemeContext, ThemeProvider} from "./context";


function App(){
  let[count, setCount] = useState(0);

  const increment = _ => setCount(count+1);
  const decrement = _ => setCount(count-1);
  const reset = _ => setCount(0);
  


return(
        <ThemeProvider>

          <ThemeContext.Consumer>
            {({styles,toggleTheme})=>{
              return(
                <>
                <button onClick={toggleTheme}>Change theme</button>
                 <div style={styles}>
                <h3>App component</h3>
                <p>count-{count}</p>
                <button className="btn btn-primary" onClick={increment}>Increment</button>{"    "}
                <button className="btn btn-warning" onClick={decrement}>Decrement</button>{"    "}
                <button className="btn btn-success" onClick={reset}>Reset</button>
                
                </div>
                <br/>
                <CountContext.Provider 
                 value={{count,
                        increment,
                        decrement,
                        reset,
                        
                        }}>
                    <Test1/>
                 </CountContext.Provider >
                </>
              )
            }}
          </ThemeContext.Consumer>
             
               
                 

        </ThemeProvider>
 
    
       
)

}

export default App;