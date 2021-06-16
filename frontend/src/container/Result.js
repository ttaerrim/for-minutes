import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

import { Box, TextField, Button, SelectList, Heading } from "gestalt";

import axios from "axios";
import ResultCreate from "./ResultCreate";

class Result extends Component {
  renderResult = async () => {
    await axios
      .get("/testapp/api/result/" + this.state.pk + "/")
      .then((response) => {
        this.setState({ results: response.data });
      })
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.renderResult();
  }
  render() {
    return (
      <>
        <Header />
        <Box
          display="flex"
          padding={10}
          marginStart={-3}
          marginEnd={-3}
          marginBottom={-3}
          marginTop={-3}
          wrap
          width="100%"
          direction="column"
        >
          <ResultCreate></ResultCreate>
        </Box>
        <Footer />
      </>
    );
  }
}

export default Result;
