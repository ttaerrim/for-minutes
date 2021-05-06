import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./container/Main";
import MinutesList from "./container/MinutesList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/minutes" component={MinutesList} />
          {/* <Route path="/minutes/:webtoonId" component={MinutesList} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
