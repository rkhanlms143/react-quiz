import React, { Component } from "react";
import QuestionComponent from "./QuestionComponent";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            TODO
            <QuestionComponent />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
