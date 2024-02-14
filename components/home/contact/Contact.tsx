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
import linkedin from "@/public/assets/linkedin.svg";
import Link from "next/link";
import smileFace from "@/public/assets/smileFace.svg";
import handIcon from "@/public/assets/hand.svg";

const Contact: NextPage = () => {
  return (
    <VStack
      w={"full"}
      h={{ lg: "644px" }}
      mx={"auto"}
      mt={"93px"}
      px={5}
      id={"contact"}
    >
      <VStack
        w={"90%"}
        mx={"auto"}
        borderRadius={"2px"}
        border={{ base: "2px solid #000", md: "6px solid #000" }}
        bg={"white"}
        shadow={{ base: "contactMobile", md: "contact" }}
        py={{ base: "60px", md: "70px" }}
        position={"relative"}
      >
        <>
          <Box
            as={Image}
            src={smileFace}
            alt={"smile face"}
            transform={"rotate(-19.654deg)"}
            position={"absolute"}
            zIndex={10}
            top={-12}
            left={{ base: "130px", md: "170px" }}
            w={{ base: "48px", md: "99px" }}
            h={{ base: "44px", md: "91px" }}
          />

          <Box
            as={Image}
            src={handIcon}
            alt={"hand icon"}
            position={"absolute"}
            zIndex={10}
            top={{ base: "-4px", md: "-10px" }}
            left={{ base: "100px", md: "130px" }}
            w={{ base: "21px", md: "43px" }}
            h={{ base: "12px", md: "25.5px" }}
          />

          <Box
            as={Image}
            src={handIcon}
            alt={"hand icon"}
            position={"absolute"}
            zIndex={10}
            top={{ base: "-4px", md: "-10px" }}
            left={{ base: "170px", md: "239px" }}
            w={{ base: "21px", md: "43px" }}
            h={{ base: "12px", md: "25.5px" }}
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
          textAlign={"center"}
          mb={{ base: "36px", md: "63px" }}
        >
          Do you want to collaborate, share opportunities, or have me work on
          your project. send me a message via my email
        </Text>

        <HStack spacing={{ base: 4, md: 10 }} mb={{ base: 5, md: 8 }}>
          <Box
            w={{ base: "24px", md: "40px", xl: "48px" }}
            h={{ base: "24px", md: "40px", xl: "48px" }}
          >
            <Image src={gmail} alt={"gmail"} />
          </Box>
          <ChakraLink
            as={Link}
            href={"mailto:mk3dits@gmail.com"}
            color={"#636363"}
            fontSize={{ base: 16, md: 30, xl: 40 }}
            textDecor={"underline"}
            transition={"all 0.5s"}
            _hover={{
              color: "orange.200",
            }}
          >
            mk3dits@gmail.com
          </ChakraLink>
        </HStack>

        <HStack spacing={{ base: 4, md: 10 }}>
          <Box
            w={{ base: "24px", md: "40px", xl: "48px" }}
            h={{ base: "24px", md: "40px", xl: "48px" }}
          >
            <Image src={linkedin} alt={"linkedin"} />
          </Box>
          <ChakraLink
            as={Link}
            href={"https://www.linkedin.com/in/michael-edo-b38414220/"}
            color={"#636363"}
            fontSize={{ base: 16, md: 30, xl: 40 }}
            textDecor={"underline"}
            transition={"all 0.5s"}
            _hover={{
              color: "orange.200",
            }}
          >
            Michael Edo
          </ChakraLink>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Contact;
