import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Table, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

const ResultCreate = ({ meeting, script }) => {
  return <p>{script}</p>;
};

ResultCreate.propTypes = {
  meeting: PropTypes.number.isRequired,
  script: PropTypes.string.isRequired,
};

export default ResultCreate;
