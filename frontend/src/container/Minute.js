import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Box, Table, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

import "./Main.css";

const Minute = ({
  id,
  title,
  topic,
  writer,
  parties,
  date,
  meeting_date,
  file,
  image,
}) => {
  return (
    // <Table.Row>
    //   <Table.Cell>
    //     <Link
    //       to={{
    //         pathname: `/minute/${id}`,
    //         state: {
    //           title,
    //           topic,
    //           writer,
    //           parties,
    //           date,
    //           meeting_date,
    //           file,
    //           image,
    //         },
    //       }}
    //     >
    //       <Text>{title}</Text>
    //     </Link>
    //   </Table.Cell>
    //   <Table.Cell>
    //     <Text>{writer}</Text>
    //   </Table.Cell>
    //   <Table.Cell>
    //     <Text>{date.substring(0, 10)}</Text>
    //   </Table.Cell>
    // </Table.Row>

 <div>
      
  <div className="container">
    <div className="table-responsive custom-table-responsive">

      <table className="table custom-table" width="100%">
        <colgroup>
        <col width="5%"/>
          <col width="10%"/>
          <col width="20%"/>
          <col width="35%"/>
          <col width="20%"/>
          <col width="10%"/>
        </colgroup>
        <tbody>
          <tr scope="row">
            <th scope="row">
              <label className="control control--checkbox">
                <input type="checkbox"/>
                <div className="control__indicator"></div>
              </label>
            </th>
            <td>
            {date.substring(0, 10)}
            </td>
            <td><Link
            to={{
              pathname: `/minute/${id}`,
              state: {
                title,
                topic,
                writer,
                parties,
                date,
                meeting_date,
                file,
                image,
              },
            }}
          >{title}</Link></td>
            <td>{topic}</td>
            <td>{parties}</td>
            <td>{writer}</td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>

  </div>
  );
};

Minute.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Minute;
