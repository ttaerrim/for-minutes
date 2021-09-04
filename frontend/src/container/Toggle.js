import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const Toggle = ({ children }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Toggle;
