import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Table, Text, TextField } from "gestalt";
import "gestalt/dist/gestalt.css";

const ResultCreate = ({ meeting, script }) => {
  return <TextField>{script}</TextField>;
};

ResultCreate.propTypes = {
  meeting: PropTypes.number.isRequired,
  script: PropTypes.string.isRequired,
};

export default ResultCreate;
