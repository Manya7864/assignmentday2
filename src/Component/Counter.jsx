import React from 'react'
import '../Component/counter.css'
const Counter=(props)=>
{


const[count,setCount]=React.useState(props.initialvalue)
let count1=count%2===0 ? 'demo1':'demo'


    return(
        <div>
            <h1 className={count1}>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>Double</button>

        </div>
    )
}
export default Counter