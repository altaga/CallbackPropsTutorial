import React from 'react';
import logo from '../logo.svg';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example: "hello world"
        };
    }

    callbackFunction = (childData) => {
        console.log(childData)
        this.props.callback(childData)
    }

    render() {
        return (
            <>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button style={{fontSize:"40px", border:"5px solid blue"}} onClick={() => this.callbackFunction("Hello World")}>
                    {this.props.buttonLabel}
                </button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </>
        );
    }
}

export default Content;