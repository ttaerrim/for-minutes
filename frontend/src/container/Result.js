import React, { useState, useEffect } from "react";
import { Box, Text, ScrollBoundaryContainer, Flex } from "gestalt";
import axios from "axios";

const Result = ({ pk }) => {
  const [script, setScript] = useState("");
  const renderResult = async () => {
    await axios
      .get(`/testapp/result/${pk}`)
      .then((response) => {
        setScript(response.data.script);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    renderResult();
  });

  return (
    <React.Fragment>
      <ScrollBoundaryContainer height={400}>
        <Box color="white" padding={4}>
          <Flex gap={4}>
            <Box>
              <Text>{script}</Text>
            </Box>
          </Flex>
        </Box>
      </ScrollBoundaryContainer>
    </React.Fragment>
  );
};

export default Result;
