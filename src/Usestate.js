import React from "react";
import { useState } from "react";
const Dummy=()=>{
    const [data,setData]=useState("React JS")
    // const name="Welcome to React JS";
    return(
        <div>
            <h1>Course:{data}</h1>
            <button onClick={()=>setData("Node JS")}>Change</button>
        </div>
    )
}
export default Dummy;   