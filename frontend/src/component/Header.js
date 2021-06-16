import React from "react";
import { Box,Flex,PageHeader,Sticky} from "gestalt";
import "gestalt/dist/gestalt.css";
import './Header.css';
import Navigation from "./Navigation";
import logo from '../logo.png';
const Header = () => (
    
    <Flex direction="column" flex="grow">

    <Navigation/>
    
    </Flex>
    
);

export default Header;