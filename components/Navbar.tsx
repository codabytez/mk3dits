import { Text, HStack, Box } from "@chakra-ui/react";
import { NextPage } from "next";
import mkLogo from "@/public/assets/mk_logo.svg";
import navBarLeftFLower from "@/public/assets/navbarLeftFlower.svg";
import navbarRightFlower from "@/public/assets/navbarRightFlower.svg";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <HStack
      as="nav"
      justifyContent={"center"}
      position={"fixed"}
      top={0}
      maxW={"1440px"}
      w={"full"}
      mx={"auto"}
      bg={"white"}
      zIndex={200}
    >
      <Box
        as={Image}
        src={navBarLeftFLower}
        pos={"absolute"}
        top={"50px"}
        left={"0px"}
        zIndex={-1}
        overflow={"hidden"}
      />

      <Box
        as={Image}
        src={navbarRightFlower}
        pos={"absolute"}
        top={"0px"}
        right={"0px"}
        zIndex={-1}
        overflow={"hidden"}
      />

      <HStack
        as="nav"
        borderBottom={"6px solid black"}
        py={8}
        justifyContent={"center"}
        position={"relative"}
        w={"full"}
        maxW={"1440px"}
      >
        <HStack
          justifyContent={"center"}
          border={"5px solid black"}
          bg={"white"}
          shadow={"navbar"}
          w={"764px"}
          position={"relative"}
        >
          <HStack
            flexBasis={"345px"}
            borderRight={"5px solid black"}
            p={"24.5px"}
            bg={"white"}
            position={"relative"}
            zIndex={1}
          >
            <Image src={mkLogo} alt="MK Logo" />
          </HStack>
          <HStack flexBasis={"418px"} flex={"1"}>
            <Text
              borderRight={"5px solid black"}
              flex={"1"}
              textAlign={"center"}
              p={7}
            >
              Home
            </Text>
            <Text
              borderRight={"5px solid black"}
              flex={"1"}
              textAlign={"center"}
              p={7}
            >
              About
            </Text>
            <Text flex={"1"} textAlign={"center"} p={7}>
              Projects
            </Text>
          </HStack>
          <HStack>
            <HStack>
              <Box
                w={"14px"}
                h={"14px"}
                position={"absolute"}
                left={"-12px"}
                top={"-14px"}
                shadow={"navbar"}
                border={"3px solid black"}
                bg={"white"}
              />

              <Box
                w={"14px"}
                h={"14px"}
                position={"absolute"}
                left={"-8px"}
                bottom={"-12px"}
                shadow={"navbar"}
                border={"3px solid black"}
                bg={"white"}
                zIndex={1}
              />
            </HStack>
            <HStack>
              <Box
                w={"14px"}
                h={"14px"}
                position={"absolute"}
                right={"-8px"}
                top={"-7px"}
                shadow={"navbar"}
                border={"3px solid black"}
                bg={"white"}
              />

              <Box
                w={"14px"}
                h={"14px"}
                position={"absolute"}
                right={"-8px"}
                bottom={"-12px"}
                shadow={"navbar"}
                border={"3px solid black"}
                bg={"white"}
              />
            </HStack>
          </HStack>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Navbar;
