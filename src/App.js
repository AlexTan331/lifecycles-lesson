import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Lifecycles from "./lifecycles.component";

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showChild: false,
      text: "",
    };

    console.log("App constructor");
  }

  componentDidMount() {
    console.log("App component did mount!");
    this.setState(
      (prevState, prevProp) => ({ showChild: !prevState.showChild }),
      () => {
        console.log("App current state:", this.state.showChild);
      }
    );
  }

  UNSAFE_componentWillUpdate() {
    console.log("App will update!");
  }

  componentDidUpdate() {
    console.log("App did update!");
  }

  render() {
    console.log("App component render!");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            onClick={() =>
              this.setState((state) => ({
                showChild: !state.showChild,
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState((state) => ({
                text: state.text + "_hello",
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
