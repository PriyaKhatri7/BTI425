import React, {Component} from "react";

class HelloWorld extends Component {
    constructor(){
        super();
        //intialize the STATE
        this.state={color:'red'}
    }
    render(){
        return (
            <div className="helloContainer">
               
<button onClick={alert('hello')}>Click Me</button>
            <h1>Hello World</h1>
            </div>
        )
    }
}
export default HelloWorld;