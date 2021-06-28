import React, { useState, useEffect } from "react";
import { Box, Text, ScrollBoundaryContainer, Flex } from "gestalt";
import axios from "axios";

const Result = ({ pk }) => {
  const [script, setScript] = useState("");
  const renderResult = async () => {
    await axios
      .get("/testapp/result/" + pk)
      .then((response) => {
        setScript(response.data.script);
      })
      .catch((error) => console.log(console));
  };

  useEffect(() => {
    renderResult();
  }, []);

  return (
    <>
      <ScrollBoundaryContainer height={400}>
        <Box color="white" padding={4}>
          <Flex gap={4}>
            <Box>
              <Text>{script}</Text>
            </Box>
          </Flex>
        </Box>
      </ScrollBoundaryContainer>
    </>
  );
};

export default Result;