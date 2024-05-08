import React,{Component} from "react";
export default class Next extends Component{
    state={
        name:"BIT TECHNOLOGIES"
    }

    render(){
        return(
            <div><h1>My Name Is:{this.state.name}</h1></div>
        )
    
    }
}