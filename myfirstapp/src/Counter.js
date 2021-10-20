import React, {Component} from "react";

class Counter extends React.Component { // activity1 from w4
    constructor() {
        super();
        if (this.props.start)
        {
            console.log("start exists");
        }
        this.state = 0;
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        console.log("prev counter = ", this.state.counter);
        this.setState(prevState => ({counter: prevState.counter + 1}) );
    }

    decrement() {
        console.log("prev counter = ", this.state.counter);
        this.setState(prevState => ({counter: prevState.counter - 1}));
    }

    reset() {
        console.log("prev vounter = ", this.state.counter);
        this.setState(prevState => ({counter: 0}));
    }
    //Life cycle Methods
    componentWillMount() {
        console.log("Will mount Counter.");
    }

    componentDidMount() {
        console.log("Counter mounted successfully.");
    }

    componentWillUnmount()
    {
        console.log("Counter will be unmounted.");
    }
    //End life cycle Methods

    render() {
        return (
            <div id = "counter">
            <button onClick={this.increment}> Increment</button>
            &ensp;

            <button onClick={this.decrement}> Decrement</button>
            &ensp;

            <button id="reset" onClick={this.reset}> Reset</button>
            <br/>

            <p>Counter: {this.state.counter}</p>
            </div>
        );
    }
}

export default Counter;