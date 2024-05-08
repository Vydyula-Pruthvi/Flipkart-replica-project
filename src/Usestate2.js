import React from "react";
import { useState } from "react";
const Dummy=()=>{
    const[data,setData]=useState({
        user:"",
        email:"",
    });

    const {user,email}=data
    const changeHandler=(e)=>{

        setData({...data,[e.target.name]:e.target.value});
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    return(
        <div>
          <form onSubmit={submitHandler}>
          <input type="text"
          placeholder="Enter Name"
          name={user}
          onChange={changeHandler}
          />
          <br/>
          
          <input type="email"
          placeholder="Enter email"
          name={email}
          onChange={changeHandler}
          />
          <br/>
          <input type="submit"/>
          <br/>
          </form>
        </div>

    );
};
export default Dummy;   