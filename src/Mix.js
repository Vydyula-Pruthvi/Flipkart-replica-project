import React,{Component} from "react";
import Next from "./State";
export default class Next extends Component{
    state={
        name:"BIT TECHNOLOGIES"
    }
    render(){
        return(
            <div><Dummy name={this.state.name}/></div>
        )
    }
}