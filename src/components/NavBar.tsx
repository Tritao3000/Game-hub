import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SeachInput from "./SeachInput";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SeachInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
