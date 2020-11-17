import React from 'react';
import Content from "./content"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: "hello world"
    };
  }

  callbackFunction = (childData) => {
    this.props.callback(childData)
  }

  render() {
    return (
      <header className="App-header">
        <Content buttonLabel={this.props.buttonLabel} callback={this.callbackFunction}/>
      </header>
    );
  }
}

export default Header;