import React, { Component } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

import { Box, TextField } from "gestalt";
import "gestalt/dist/gestalt.css";
import DatePicker from "gestalt-datepicker";
import "gestalt-datepicker/dist/gestalt-datepicker.css";

const Example = (props) => {
  const [value, setValue] = React.useState("");
  const handleChange = (value) => value;
  //   title, topic, writer, parties, meeting_date, date, file
  return (
    <div>
      <TextField
        id="title"
        onChange={({ value }) => setValue(value)}
        placeholder="글 제목"
        label="제목"
        value={value}
      />
      <br />
      <br />
      <TextField
        id="topic"
        onChange={({ value }) => setValue(value)}
        placeholder="회의 안건"
        label="회의 안건"
        value={value}
      />
      <br />
      <br />
      <TextField
        id="writer"
        onChange={({ value }) => setValue(value)}
        placeholder="작성자"
        label="작성자"
        value={value}
      />
      <br />
      <br />
      <TextField
        id="parties"
        onChange={({ value }) => setValue(value)}
        placeholder="참여자"
        label="참여자"
        value={value}
      />
      <br />
      <br />
      <DatePicker
        id="example-basic"
        label="Select a date"
        onChange={({ value }) => handleChange(value)}
      />
    </div>
  );
};

class Post extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Box padding={10}>
          <Example></Example>
        </Box>
        <Footer />
      </div>
    );
  }
}

export default Post;
