import React, { Component } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";

import { Table, Text, Box } from "gestalt";
import "gestalt/dist/gestalt.css";

const ListTable = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Text weight="bold">Name</Text>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Text weight="bold">House</Text>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Text weight="bold">Birthday</Text>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Text>Luna Lovegood</Text>
          </Table.Cell>
          <Table.Cell>
            <Text>Ravenclaw</Text>
          </Table.Cell>
          <Table.Cell>
            <Text>June 25, 1993</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text>Draco Malfoy</Text>
          </Table.Cell>
          <Table.Cell>
            <Text>Slytherin</Text>
          </Table.Cell>
          <Table.Cell>
            <Text>December 3, 1992</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text>Hermione Granger</Text>
          </Table.Cell>
          <Table.Cell>
            <Text>Gryffindor</Text>
          </Table.Cell>
          <Table.Cell>
            <Text>September 19, 1979</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text>Neville Longbottom</Text>
          </Table.Cell>
          <Table.Cell>
            <Text>Gryffindor</Text>
          </Table.Cell>
          <Table.Cell>
            <Text>July 30, 1980</Text>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
class MinutesList extends Component {
  render() {
    return (
      <div>
        <Header />
        <Box padding={10}>
          <ListTable></ListTable>
        </Box>

        <Footer />
      </div>
    );
  }
}

export default MinutesList;
