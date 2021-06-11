import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

import { Box, Heading, Table, Text, Divider } from "gestalt";
import "gestalt/dist/gestalt.css";
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
                {location.state.title}
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
                  <Text>{location.state.title}</Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    회의 안건
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{location.state.topic}</Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    작성자
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{location.state.writer}</Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    참석자
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{location.state.parties}</Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    게시일
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{location.state.date.substring(0, 10)}</Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    회의 날짜
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>
                    {location.state.meeting_date.substring(0, 10)}{" "}
                    {location.state.meeting_date.substring(11, 16)}
                  </Text>
                </Table.Cell>
              </Table.Row>
            </Table>

            <Box height={100}></Box>
          </Box>
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
