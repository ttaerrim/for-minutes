import React, { Component } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

import { Box, TextField, Button, SelectList, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
import DatePicker from "gestalt-datepicker";
import "gestalt-datepicker/dist/gestalt-datepicker.css";

import axios from "axios";

const API = axios.create();

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const MeetingCreate = (name, position, age) =>
  API.post("/testapp/api/", {
    name: name,
    position: position,
    age: age,
  });

const PostForm = (props) => {
  const [topic, setTopic] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [writer, setWriter] = React.useState("");
  const [parties, setParties] = React.useState("");
  const [meeting_date, setMeetingDate] = React.useState(undefined);

  const createTime = () => {
    const meeting_time = [];
    for (let i = 0; i < 24; i++) {
      const name = new Object();
      i = String("0" + i).slice(-2);
      name.label = i;
      name.value = i;
      meeting_time.push(name);
    }
    return meeting_time;
  };
  const createMinute = () => {
    const meeting_minute = [];
    for (let i = 0; i < 60; i++) {
      const name = new Object();
      i = String("0" + i).slice(-2);
      name.label = i;
      name.value = i;
      meeting_minute.push(name);
    }
    return meeting_minute;
  };

  const handleChange = (meeting_date) => meeting_date;
  return (
    <div>
      <Box
        display="flex"
        marginStart={-3}
        marginEnd={-3}
        marginBottom={-3}
        marginTop={-3}
        wrap
        width="100%"
        direction="column"
      >
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            id="title"
            onChange={({ title }) => setTitle(title)}
            placeholder="글 제목"
            label="제목"
            value={title}
          />
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            id="topic"
            onChange={({ topic }) => setTopic(topic)}
            placeholder="회의 안건"
            label="회의 안건"
            value={topic}
          />
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            id="writer"
            onChange={({ writer }) => setWriter(writer)}
            placeholder="작성자"
            label="작성자"
            value={writer}
          />
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            id="parties"
            onChange={({ parties }) => setParties(parties)}
            placeholder="회의 참여자"
            label="참여자"
            value={parties}
          />
        </Box>

        <Box flex="grow" paddingX={3} paddingY={3}>
          <Box
            display="flex"
            wrap
            marginStart={-3}
            marginEnd={-3}
            marginBottom={-3}
            marginTop={-3}
            label="회의시간"
          >
            <Box flex="grow" paddingX={3} paddingY={3}>
              <DatePicker
                id="meeting_date"
                label="회의 날짜"
                onChange={({ event, value }) => setMeetingDate(value)}
                value={meeting_date}
              />
            </Box>
            <Box flex="grow" paddingX={3} paddingY={3}>
              <SelectList
                id="meeting_time"
                onChange={() => {}}
                options={createTime()}
                size="lg"
                label="시"
              />
            </Box>
            <Box flex="grow" paddingX={3} paddingY={3}>
              <SelectList
                id="meeting_minute"
                onChange={() => {}}
                options={createMinute()}
                size="lg"
                label="분"
              />
            </Box>
          </Box>
        </Box>

        <Box flex="grow" paddingX={3} paddingY={3}>
          <Box
            justifyContent="end"
            marginStart={-1}
            marginEnd={-1}
            marginTop={-1}
            marginBottom={-1}
            display="flex"
            wrap
          >
            <Box paddingX={1} paddingY={1}>
              <Button text="완료" color="red" size="lg" type="submit" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.title,
      topic: this.topic,
      writer: this.writer,
      parties: this.parties,
      meeting_date: this.meeting_date,
      value: "",
      textList: [],
    };
  }
  //   title, topic, writer, parties, meeting_date, date, file
  // handleSubmit = () => {
  //   const { title, topic, writer, parties, meeting_date } = this.state;
  //   console.log(this.state);
  //   axios
  //     .post("/testapp/api/create", {
  //       title: title,
  //       topic: topic,
  //       writer: writer,
  //       parties: parties,
  //       meeting_date: meeting_date,
  //       file: null,
  //     })
  //     .then((res) => console.log(this.state));
  // };
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Box padding={10}>
          <PostForm></PostForm>
        </Box>
        <Footer />
      </div>
    );
  }
}

export default Post;
