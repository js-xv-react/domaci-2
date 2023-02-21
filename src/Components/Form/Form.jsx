import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state={
            name:'',
            lastName:'',
            email:'',
            password:''
        };
        this.abc= this.changeHandler.bind(this);
    }

    changeHandler(event) {
        const zagrada = event.target.name;
        const value = event.target.value;
        this.setState({ [zagrada]: value});
        console.log(this.state);
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log("SERVER PAYLOAD");
        console.log("_______________");
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log("I have updated");
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <p>Unesite vase ime:</p>
                <input type="text" name="name" onChange={this.abc} />
                <p>Unesite vase prezime:</p>
                <input type="text" name="lastName" onChange={this.abc} />
                <p>Unesite vase mejl:</p>
                <input type="text" name="email" onChange={this.abc} />
                <p>Unesite vase password:</p>
                <input type="password" name="password" onChange={this.abc} />
                <br />
                <input type="submit" name="SUBMIT" />
            </form>
        )
    }
}

export default Form
