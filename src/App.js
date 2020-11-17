import React from 'react';
import './App.css';
import Header from './component/header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: "Text :("
    };
  }

  callbackFunction = (childData) => {
    this.setState({
      example: childData
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.example}
        <Header buttonLabel="CallBackS :3" callback={this.callbackFunction} />
      </div>
    );
  }
}

export default App;
