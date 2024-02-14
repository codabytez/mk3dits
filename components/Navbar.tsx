"use client";
import { HStack, Box, Stack, Link as ChakraLink } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import mkLogo from "@/public/assets/mk_logo.svg";
import navBarLeftFLower from "@/public/assets/navbarLeftFlower.svg";
import navbarRightFlower from "@/public/assets/navbarRightFlower.svg";
import Image from "next/image";
import { useState } from "react";

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        display={{ base: "none", lg: "block" }}
      />

      <Box
        as={Image}
        src={navbarRightFlower}
        pos={"absolute"}
        top={"0px"}
        right={"0px"}
        zIndex={-1}
        overflow={"hidden"}
        display={{ base: "none", lg: "block" }}
      />

      <HStack
        as="nav"
        borderBottom={{ lg: "6px solid black" }}
        py={{ base: 2, lg: 8 }}
        justifyContent={"center"}
        position={"relative"}
        w={"full"}
        maxW={"1440px"}
      >
        <HStack
          justifyContent={{ base: "space-between", lg: "center" }}
          border={"5px solid black"}
          bg={"white"}
          shadow={"navbar"}
          w={{ base: "full", md: "764px" }}
          position={"relative"}
        >
          <HStack
            flexBasis={{ sm: "345px" }}
            p={"24.5px"}
            bg={"white"}
            position={"relative"}
            zIndex={1}
          >
            <Image src={mkLogo} alt="MK Logo" />
          </HStack>

          <Box
            as={"svg"}
            display={{ base: "flex", lg: "none" }}
            position={"absolute"}
            right={3}
            cursor={"pointer"}
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              d="M6.84375 11.4694C6.84375 11.0605 7.00618 10.6684 7.29529 10.3793C7.58441 10.0902 7.97654 9.92773 8.38542 9.92773H29.9688C30.3776 9.92773 30.7698 10.0902 31.0589 10.3793C31.348 10.6684 31.5104 11.0605 31.5104 11.4694C31.5104 11.8783 31.348 12.2704 31.0589 12.5595C30.7698 12.8486 30.3776 13.0111 29.9688 13.0111H8.38542C7.97654 13.0111 7.58441 12.8486 7.29529 12.5595C7.00618 12.2704 6.84375 11.8783 6.84375 11.4694ZM6.84375 19.1777C6.84375 18.7689 7.00618 18.3767 7.29529 18.0876C7.58441 17.7985 7.97654 17.6361 8.38542 17.6361H29.9688C30.3776 17.6361 30.7698 17.7985 31.0589 18.0876C31.348 18.3767 31.5104 18.7689 31.5104 19.1777C31.5104 19.5866 31.348 19.9787 31.0589 20.2679C30.7698 20.557 30.3776 20.7194 29.9688 20.7194H8.38542C7.97654 20.7194 7.58441 20.557 7.29529 20.2679C7.00618 19.9787 6.84375 19.5866 6.84375 19.1777ZM6.84375 26.8861C6.84375 26.4772 7.00618 26.0851 7.29529 25.7959C7.58441 25.5068 7.97654 25.3444 8.38542 25.3444H29.9688C30.3776 25.3444 30.7698 25.5068 31.0589 25.7959C31.348 26.0851 31.5104 26.4772 31.5104 26.8861C31.5104 27.2949 31.348 27.6871 31.0589 27.9762C30.7698 28.2653 30.3776 28.4277 29.9688 28.4277H8.38542C7.97654 28.4277 7.58441 28.2653 7.29529 27.9762C7.00618 27.6871 6.84375 27.2949 6.84375 26.8861Z"
              fill="black"
            />
          </Box>

          <Stack
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "flex-start" }}
            flexBasis={"418px"}
            flex={"1"}
            position={{ base: "absolute", lg: "relative" }}
            transform={{
              base: isOpen ? "translateY(0)" : "translateY(-140%)",
              lg: "translateY(0)",
            }}
            transition={"transform 1s ease-in-out"}
            w={{ base: "full", lg: "auto" }}
            maxW={{ base: "690px", lg: "auto" }}
            h={{ base: "300px", lg: "auto" }}
            top={{ base: "90px", lg: "auto" }}
            bg={"white"}
            spacing={{ base: 0 }}
            zIndex={{ base: -1, lg: 1 }}
          >
            <ChakraLink
              as={Link}
              href={"/"}
              border={{ base: "5px solid black", lg: 0 }}
              borderBottom={0}
              borderX={{ lg: "5px solid black" }}
              flex={"1"}
              alignItems={"center"}
              textAlign={"center"}
              p={{ base: 0, md: 7 }}
              display={{ base: "none", lg: "flex" }}
              fontWeight={"medium"}
              fontSize={{ base: 24, sm: 56, lg: 24 }}
              role={"group"}
              position={"relative"}
              _hover={{
                textDecoration: "none",
              }}
              onClick={() => setIsOpen(false)}
            >
              Home
              <Box
                as={"span"}
                position={"absolute"}
                w={{ base: "30%", lg: "60%" }}
                h={{ base: "40px", lg: "20px" }}
                zIndex={-1}
                bg={"#FFDC58"}
                display={"none"}
                _groupHover={{ display: "block" }}
              />
            </ChakraLink>
            <ChakraLink
              as={Link}
              href={"#about"}
              border={{ base: "5px solid black", lg: 0 }}
              borderBottom={0}
              borderRight={{ lg: "5px solid black" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flex={"1"}
              textAlign={"center"}
              p={{ base: 0, md: 7 }}
              fontSize={{ base: 24, sm: 56, lg: 24 }}
              fontWeight={"medium"}
              role={"group"}
              position={"relative"}
              _hover={{
                textDecoration: "none",
              }}
              onClick={() => setIsOpen(false)}
            >
              About
              <Box
                as={"span"}
                position={"absolute"}
                w={{ base: "30%", lg: "60%" }}
                h={{ base: "40px", lg: "20px" }}
                zIndex={-1}
                bg={"#FFDC58"}
                display={"none"}
                _groupHover={{ display: "block" }}
              />
            </ChakraLink>
            <ChakraLink
              as={Link}
              href={"#projects"}
              border={{ base: "5px solid black", lg: 0 }}
              borderBottom={0}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flex={"1"}
              textAlign={"center"}
              p={{ base: 0, md: 7 }}
              fontSize={{ base: 24, sm: 56, lg: 24 }}
              fontWeight={"medium"}
              role={"group"}
              position={"relative"}
              _hover={{
                textDecoration: "none",
              }}
              onClick={() => setIsOpen(false)}
            >
              Projects
              <Box
                as={"span"}
                position={"absolute"}
                w={{ base: "30%", lg: "60%" }}
                h={{ base: "40px", lg: "20px" }}
                zIndex={-1}
                bg={"#FFDC58"}
                display={"none"}
                _groupHover={{ display: "block" }}
              />
            </ChakraLink>
            <ChakraLink
              as={Link}
              href={"#contact"}
              border={{ base: "5px solid black", lg: 0 }}
              justifyContent={"center"}
              alignItems={"center"}
              flex={"1"}
              textAlign={"center"}
              p={{ base: 0, md: 7 }}
              fontSize={{ base: 24, sm: 56, lg: 24 }}
              fontWeight={"medium"}
              display={{ base: "flex", lg: "none" }}
              role={"group"}
              position={"relative"}
              _hover={{
                textDecoration: "none",
              }}
              onClick={() => setIsOpen(false)}
            >
              Contact
              <Box
                as={"span"}
                position={"absolute"}
                w={"30%"}
                h={{ base: "40px", lg: "33px" }}
                zIndex={-1}
                bg={"#FFDC58"}
                display={"none"}
                _groupHover={{ display: "block" }}
              />
            </ChakraLink>
          </Stack>
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
