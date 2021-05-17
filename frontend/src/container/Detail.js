import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navigation from "../component/Navigation";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <Header />
          <div>
            <p>제목: {location.state.title}</p>
            <p>회의 안건: {location.state.topic}</p>
            <p>작성자: {location.state.writer}</p>
            <p>참석자: {location.state.parties}</p>
            <p>게시일: {location.state.date.substring(0, 10)}</p>
            <p>회의 날짜: {location.state.meeting_date.substring(0, 10)}</p>
          </div>
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
