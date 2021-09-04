import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Main from "./container/Main";
import MinutesList from "./container/MinutesList";
import Post from "./container/Post";
import About from "./container/About";
import Detail from "./container/Detail";
import Update from "./container/Update";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/post/" component={Post} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/minutes/" component={MinutesList} />
          <Route exact path="/minute/:id/" component={Detail} />
          <Route exact path="/minute/update/:id/" component={Update} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
