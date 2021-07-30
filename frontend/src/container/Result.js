import React, { useState, useEffect } from "react";
import { Box, Text, ScrollBoundaryContainer, Flex } from "gestalt";
import axios from "axios";
import urlExist from "url-exist";

const Result = ({ pk }) => {
  const [script, setScript] = useState("");
  const [url, setUrl] = useState("");

  const renderResult = async () => {
    setUrl(`/testapp/result/${pk}`);
    // console.log(url);
    // const check = await urlExist(`http://127.0.0.1:8000${url}`);
    // console.log(check);
    if (await urlExist(`http://127.0.0.1:8000${url}`)) {
      // console.log("if문 실행");
      await axios
        .get(url)
        .then((response) => {
          setScript(response.data.script);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  };

  useEffect(() => {
    renderResult();
  });

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
