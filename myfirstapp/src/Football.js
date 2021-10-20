import React, {Component} from "react";
//import Football from "./Football";

class Football extends React.Component
{
    constructor(){
        super();
        //This binding is necessary to make 'this' work in the callback
        this.shoot = this.shoot.bind(this);
    }
    shoot() {
        alert("Great Shot!");
    }
    render() {
        return (<button onClick={this.shoot}>Take the shot!</button>);
    }
}
export default Football;

/*class Counter extends Component {
    ReactDOM.render(
        <div>
            <Football/>
            <Counter start="10"/>
        </div>
        document.getElementById("root"));
}
export default Counter;*/