import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

import { Table, Text, Box } from "gestalt";
import "gestalt/dist/gestalt.css";
import axios from "axios";

import Minute from "./Minute.js";
import "./Main.css";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

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
      <div class="mlbg wrapper">
        <Navigation />
            <Table>
              {/* <Table.Header>
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
              </Table.Header> */}
    
    <div className="container">
      <div className="table-responsive custom-table-responsive">
    
        <table className="table custom-table">
          <colgroup>
            <col width="5%"/>
            <col width="10%"/>
            <col width="20%"/>
            <col width="35%"/>
            <col width="20%"/>
            <col width="10%"/>
          </colgroup>
          <thead>
            <tr>  
    
              <th scope="col">
                <label className="control control--checkbox">
                  <input type="checkbox"  className="js-check-all"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              
              <th scope="col">게시일</th>
              <th scope="col">제목</th>
              <th scope="col">회의 안건</th>
              <th scope="col">참여자</th>
              <th scope="col">작성자</th>
            </tr>
          </thead>
          
        </table>
        </div>
              </div>
        
    
              <Table.Body>
                {results.reverse().map((result) => {
                  return (
                    <Minute
                      id={result.id}
                      title={result.title}
                      topic={result.topic}
                      writer={result.writer}
                      parties={result.parties}
                      date={result.date}
                      meeting_date={result.meeting_date}
                      file={result.file}
                      image={result.photo}
                    />
                  );
                })}
              </Table.Body>
              
            </Table>
            
        <Footer />
      </div>
    );
  }

  _renderMinute = async () => {
    await axios
      .get("/testapp/meeting")
      .then((response) => {
        this.setState({ results: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export default MinutesList;


