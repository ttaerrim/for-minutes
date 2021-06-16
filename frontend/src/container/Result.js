import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Detail from "./Detail";


import { Box, Text, ScrollBoundaryContainer, Flex } from "gestalt";
const Result = ({ script }) => {
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
