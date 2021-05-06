import React, { Component } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";

import { Box, TextField } from "gestalt";
import "gestalt/dist/gestalt.css";

const Example = (props) => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <TextField
        id="email"
        onChange={({ value }) => setValue(value)}
        placeholder="글 제목"
        label="제목"
        value={value}
      />
      <TextField
        id="writer"
        onChange={({ value }) => setValue(value)}
        placeholder="작성자"
        label="작성자2"
        value={value}
      />
    </div>
  );
};

class Post extends Component {
  render() {
    return (
      <div>
        <Header />
        <Box padding={10}>
          <Example></Example>
        </Box>
        <Footer />
      </div>
    );
  }
}

export default Post;
