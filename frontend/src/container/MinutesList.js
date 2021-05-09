import React, { Component } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

import { Table, Text, Box } from "gestalt";
import "gestalt/dist/gestalt.css";

import axios from "axios";

import Minute from "./Minute.js";

class MinutesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loaded: false,
      placeholder: "Loading",
    };
  }
  componentDidMount() {
    this._renderMinute();
  }
  render() {
    const { results } = this.state;

    return (
      <div>
        <Header />
        <Navigation />
        <Box padding={10}>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Text weight="bold">제목</Text>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Text weight="bold">작성자</Text>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Text weight="bold">날짜</Text>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {results.map((result) => {
                return (
                  <Minute
                    id={result.id}
                    title={result.title}
                    writer={result.writer}
                    date={result.date}
                  />
                );
              })}
            </Table.Body>
          </Table>
        </Box>

        <Footer />
      </div>
    );
  }

  _renderMinute = async () => {
    await axios
      .get("/testapp/api")
      .then((response) => {
        this.setState({ results: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export default MinutesList;
