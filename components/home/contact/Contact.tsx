import React from "react";
import {
  HStack,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import gmail from "@/public/assets/gmail.svg";
import linkedin from "@/public/assets/linkedIn.svg";
import Link from "next/link";
import smileFace from "@/public/assets/smileFace.svg";
import handIcon from "@/public/assets/hand.svg";

const Contact: NextPage = () => {
  return (
    <VStack
      h={{ lg: "644px" }}
      id={"contact"}
      mt={"93px"}
      mx={"auto"}
      px={5}
      w={"full"}
    >
      <VStack
        bg={"white"}
        border={{ base: "2px solid #000", md: "6px solid #000" }}
        borderRadius={"2px"}
        mx={"auto"}
        position={"relative"}
        py={{ base: "60px", md: "70px" }}
        shadow={{ base: "contactMobile", md: "contact" }}
        w={"90%"}
      >
        <>
          <Box
            alt={"smile face"}
            as={Image}
            h={{ base: "44px", md: "91px" }}
            left={{ base: "130px", md: "170px" }}
            position={"absolute"}
            src={smileFace}
            top={{ base: -12, md: -24 }}
            transform={"rotate(-19.654deg)"}
            w={{ base: "48px", md: "99px" }}
            zIndex={10}
          />

          <Box
            alt={"hand icon"}
            as={Image}
            h={{ base: "12px", md: "25.5px" }}
            left={{ base: "100px", md: "130px" }}
            position={"absolute"}
            src={handIcon}
            top={{ base: "-4px", md: "-10px" }}
            w={{ base: "21px", md: "43px" }}
            zIndex={10}
          />

          <Box
            alt={"hand icon"}
            as={Image}
            h={{ base: "12px", md: "25.5px" }}
            left={{ base: "170px", md: "239px" }}
            position={"absolute"}
            src={handIcon}
            top={{ base: "-4px", md: "-10px" }}
            w={{ base: "21px", md: "43px" }}
            zIndex={10}
          />
        </>

        <Heading
          as={"h3"}
          fontSize={{ base: 18, md: 40, xl: 48 }}
          fontWeight={"medium"}
          mb={5}
        >
          Let’s connect
        </Heading>

        <Text
          fontSize={{ base: 14, md: 24, xl: 32 }}
          maxW={{ base: "243px", sm: "420px", md: "600px", xl: "866px" }}
          mb={{ base: "36px", md: "63px" }}
          textAlign={"center"}
        >
          Do you want to collaborate, share opportunities, or have me work on
          your project. send me a message via my email
        </Text>

        <HStack mb={{ base: 5, md: 8 }} spacing={{ base: 4, md: 10 }}>
          <Box
            h={{ base: "24px", md: "40px", xl: "48px" }}
            w={{ base: "24px", md: "40px", xl: "48px" }}
          >
            <Image alt={"gmail"} src={gmail} />
          </Box>
          <ChakraLink
            _hover={{
              color: "orange.200",
            }}
            as={Link}
            color={"#636363"}
            fontSize={{ base: 16, md: 30, xl: 40 }}
            href={"mailto:mk3dits@gmail.com"}
            textDecor={"underline"}
            transition={"all 0.5s"}
          >
            mk3dits@gmail.com
          </ChakraLink>
        </HStack>

        <HStack spacing={{ base: 4, md: 10 }}>
          <Box
            h={{ base: "24px", md: "40px", xl: "48px" }}
            w={{ base: "24px", md: "40px", xl: "48px" }}
          >
            <Image alt={"linkedin"} src={linkedin} />
          </Box>
          <ChakraLink
            _hover={{
              color: "orange.200",
            }}
            as={Link}
            color={"#636363"}
            fontSize={{ base: 16, md: 30, xl: 40 }}
            href={"https://www.linkedin.com/in/michael-edo-b38414220/"}
            textDecor={"underline"}
            transition={"all 0.5s"}
          >
            Michael Edo
          </ChakraLink>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Contact;
