import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Result from "./Result.js";

import { Box, Heading, Table, Text, Button } from "gestalt";
import "gestalt/dist/gestalt.css";

import axios from "axios";

import { useHistory } from "react-router";

const Detail = (props) => {
  const history = useHistory();
  const [pk, setPk] = useState();
  const [topic, setTopic] = useState();
  const [title, setTitle] = useState();
  const [writer, setWriter] = useState("");
  const [parties, setParties] = useState("");
  const [meeting_date, setMeetingDate] = useState(undefined);
  const [date, setDate] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    setPk(props.match.params.id);
    setTitle(props.location.state.title);
    setTopic(props.location.state.topic);
    setMeetingDate(
      props.location.state.meeting_date.substring(0, 10) +
        " " +
        props.location.state.meeting_date.substring(11, 16)
    );
    setDate(props.location.state.date.substring(0, 10));
    setFile(props.location.state.file);
    setImage(
      !props.location.state.image
        ? props.location.state.image
        : props.location.state.image.replace("media", "static")
    );
    setWriter(props.location.state.writer);
    setParties(props.location.state.parties);
  });

  const createResult = async () => {
    let formData = new FormData();
    formData.append("pk", pk);

    await axios
      .post(`/testapp/result/${pk}/create`, formData)
      .then((res) => {
        alert("success");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        alert("fail");
      });
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까??") === true) {
      axios.delete(`/testapp/meeting/${pk}/delete`).then((res) => {
        console.log(res.data);
        history.push("/minutes");
      });
    }
  };

  return (
    <div class="bg wrapper">
      <Header />
      <div class="main-content">
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
          <Box
            flex="grow"
            paddingX={3}
            paddingY={4}
            borderStyle="shadow"
            rounding={3}
            color="white"
          >
            <Heading size="md" color="midnight">
              Title: {title}
            </Heading>
          </Box>
          <Box height={50}></Box>

          <Table>
            <Table.Row>
              <Table.Cell>
                <Text color="midnight" weight="bold">
                  제목
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{title}</Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text color="midnight" weight="bold">
                  회의 안건
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{topic}</Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text color="midnight" weight="bold">
                  작성자
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{writer}</Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text color="midnight" weight="bold">
                  참석자
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{parties}</Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text color="midnight" weight="bold">
                  게시일
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{date}</Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text color="midnight" weight="bold">
                  회의 날짜
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{meeting_date}</Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Text color="midnight" weight="bold">
                  사진
                </Text>
              </Table.Cell>
              <Table.Cell>
                <img src={image}></img>
              </Table.Cell>
            </Table.Row>
          </Table>
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
                <Link
                  to={{
                    pathname: `/minute/update/${pk}/`,
                    state: {
                      title: title,
                      topic: topic,
                      writer: writer,
                      parties: parties,
                      date: date,
                      meeting_date: meeting_date,
                      file: file,
                      image: image,
                    },
                  }}
                >
                  <Button text="수정" color="gray" />
                </Link>
              </Box>
              <Box paddingX={1} paddingY={1}>
                <Button text="삭제" color="red" onClick={handleDelete} />
              </Box>
            </Box>
            <Box
              justifyContent="center"
              marginStart={-1}
              marginEnd={-1}
              marginTop={-1}
              marginBottom={-1}
              display="flex"
              wrap
            >
              <Box paddingX={1} paddingY={1}>
                <Button
                  type="button"
                  onClick={createResult}
                  text="Result 결과"
                  inline
                ></Button>
              </Box>
            </Box>
          </Box>
          <Box padding={10}>
            <Result pk={pk}></Result>
          </Box>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
