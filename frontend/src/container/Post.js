import React, { Component } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

import { Box, TextField } from "gestalt";
import "gestalt/dist/gestalt.css";
import DatePicker from "gestalt-datepicker";
import "gestalt-datepicker/dist/gestalt-datepicker.css";

const MeetingPost = (props) => {
  const [title, setTitle] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const [writer, setWriter] = React.useState("");
  const [parties, setParties] = React.useState("");
  const handleChange = (meeintg_date) => meeintg_date;
  const time_option = [
    { label: "Algeria", value: "algeria" },
    { label: "Belgium", value: "belgium" },
    { label: "Canada", value: "canada" },
    { label: "Denmark", value: "denmark" },
    { label: "Egypt", value: "egypt" },
    { label: "France", value: "france" },
  ];
  //   title, topic, writer, parties, meeting_date, date, file
  return (
    <div>
      <TextField
        id="title"
        onChange={({ title }) => setTitle(title)}
        placeholder="글 제목"
        label="제목"
        value={title}
      />
      <br />
      <br />
      <TextField
        id="topic"
        onChange={({ topic }) => setTopic(topic)}
        placeholder="회의 안건"
        label="회의 안건"
        value={topic}
      />
      <br />
      <br />
      <TextField
        id="writer"
        onChange={({ writer }) => setWriter(writer)}
        placeholder="작성자"
        label="작성자"
        value={writer}
      />
      <br />
      <br />
      <TextField
        id="parties"
        onChange={({ parties }) => setParties(parties)}
        placeholder="참여자"
        label="참여자"
        value={parties}
      />
      <br />
      <br />
      <DatePicker
        id="meeting_date"
        label="회의 날짜"
        onChange={({ meeintg_date }) => handleChange(meeintg_date)}
      />
      <br />
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
          <MeetingPost></MeetingPost>
        </Box>
        <Footer />
      </div>
    );
  }
}

export default Post;
