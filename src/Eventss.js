import React,{Component} from "react";
import ReactDOM from "react-dom";
class Showalert extends Component{
    showAlert(){
        alert("I'm an alert")
    }
    render(){
        return<button onClick={this.showAlert}>click</button>;

    }
}
export default Showalert;