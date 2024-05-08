import React, { useEffect, useState } from "react";
const Fetching=()=>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(data=>setData(data))
    })
    return(
        <div>
            {
                data.map((item) =>
                <>
                <li>{item.title}</li>
                <li>{item.body}</li>
                </>
    )
            }
        </div>
    )
}
export default Fetching