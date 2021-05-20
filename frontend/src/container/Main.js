import React from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        Main
        <Footer />
      </div>
    );
  }
}

export default Main;
