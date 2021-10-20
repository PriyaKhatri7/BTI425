import React, {Component} from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

class MountUnmount extends Component {
    constructor() {
        super();
        this.state = {counter: 0};
        this.mountCounter = this.mountCounter.bind(this);
        this.unmountCounter = this.unmountCounter.bind(this);
    }

    mountCounter() {
        ReactDOM.render (
            <Counter start='0'/>,
            document.getElementById('counter')
        );
    }

    unmountCounter() {
        ReactDOM.unmountComponentAtNode(document.getElementById('counter'));
    }

    render() {
        return (
            <div id="mountUnmount">
                <button id="mount" onClick={this.mountCounter}> Mount</button>
                &ensp;
                <button id="unmount" onClick={this.unmountCounter}> Unmount</button>
            </div>
        );
    }
}

export default MountUnmount;