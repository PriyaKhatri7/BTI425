import React from "react";

class OurForm extends React.Component
{
    handleSubmit()
    {
        alert("name: " + document.getElementById("name").value + ", age: " + document.getElementById("age").value);
    }
    ageChecker = (event) =>
    {
        let val = event.target.value;
        if(val < 30 || val > 100)
        {
            document.getElementById("ageVer").innerHTML = "Age much be between 30 and 100";
        }
        else
        {
            document.getElementById("ageVer").innerHTML = "";
        }
        this.updateHeader();
    }
    mySubmitHandler = (event) =>
    {
        event.preventDefault();
        alert("You are submitting");
    }
    updateHeader()
    {
        document.getElementById("header").innerHTML = "Hello " + document.getElementById("name").value + " " + document.getElementById("age").value;
    }
    render() {
		return (
			<div>
                <h2 id="header">Hello</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>enter your name:</p>
                    <input type="text" id="name" onChange={this.updateHeader}></input>
                    <p>enter your age</p>
                    <input type="number" id="age" onChange={this.ageChecker}></input><p id="ageVer"></p>

                    <input type="submit"></input>
                </form>
			</div>
		);
	}
}
export default OurForm;