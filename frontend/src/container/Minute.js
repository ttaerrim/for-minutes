import React, { Component } from "react";
import PropTypes from "prop-types";

import { Table, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

const Minute = ({ id, title, writer, date }) => {
  const output_date = date.substring(0, 10);
  return (
    <Table.Row>
      <Table.Cell>
        <Text>{title}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text>{writer}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text>{output_date}</Text>
      </Table.Cell>
    </Table.Row>
  );
};

Minute.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Minute;
