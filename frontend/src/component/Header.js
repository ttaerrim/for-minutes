import React from "react";
import { Box, Text,Flex,PageHeader} from "gestalt";
import "gestalt/dist/gestalt.css";
import './Header.css';
import Navigation from "./Navigation";

const Header = () => (
    
    <Flex direction="column" flex="grow">
    
    <PageHeader
      title="Logo. For Minutes"
      primaryAction={
            <Navigation/>
      }
    />
    <Box
      display="flex"
      wrap
      width="80%"
      direction="column"
      marginStart={5}
    >
    </Box>
  </Flex>
);

export default Header;