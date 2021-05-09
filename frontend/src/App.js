import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./container/Main";
import MinutesList from "./container/MinutesList";
import Post from "./container/Post";
import Detail from "./container/Detail";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/minutes" component={MinutesList} />
          <Route exact path="/minute/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
