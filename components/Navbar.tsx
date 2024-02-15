"use client";
import React from "react";
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
      bg={"white"}
      justifyContent={"center"}
      maxW={"1440px"}
      mx={"auto"}
      position={"fixed"}
      top={0}
      w={"full"}
      zIndex={200}
    >
      <Box
        as={Image}
        display={{ base: "none", lg: "block" }}
        left={"0px"}
        overflow={"hidden"}
        pos={"absolute"}
        src={navBarLeftFLower}
        top={"50px"}
        zIndex={-1}
      />

      <Box
        as={Image}
        display={{ base: "none", lg: "block" }}
        overflow={"hidden"}
        pos={"absolute"}
        right={"0px"}
        src={navbarRightFlower}
        top={"0px"}
        zIndex={-1}
      />

      <HStack
        as="nav"
        borderBottom={{ lg: "6px solid black" }}
        justifyContent={"center"}
        maxW={"1440px"}
        position={"relative"}
        py={{ base: 2, lg: 8 }}
        w={"full"}
      >
        <HStack
          bg={"white"}
          border={"5px solid black"}
          justifyContent={{ base: "space-between", lg: "center" }}
          position={"relative"}
          shadow={"navbar"}
          w={{ base: "full", md: "764px" }}
        >
          <HStack
            bg={"white"}
            flexBasis={{ sm: "345px" }}
            p={"24.5px"}
            position={"relative"}
            zIndex={1}
          >
            <Image alt="MK Logo" src={mkLogo} />
          </HStack>

          <Box
            as={"svg"}
            cursor={"pointer"}
            display={{ base: "flex", lg: "none" }}
            fill="none"
            height="38"
            position={"absolute"}
            right={3}
            viewBox="0 0 38 38"
            width="38"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              d="M6.84375 11.4694C6.84375 11.0605 7.00618 10.6684 7.29529 10.3793C7.58441 10.0902 7.97654 9.92773 8.38542 9.92773H29.9688C30.3776 9.92773 30.7698 10.0902 31.0589 10.3793C31.348 10.6684 31.5104 11.0605 31.5104 11.4694C31.5104 11.8783 31.348 12.2704 31.0589 12.5595C30.7698 12.8486 30.3776 13.0111 29.9688 13.0111H8.38542C7.97654 13.0111 7.58441 12.8486 7.29529 12.5595C7.00618 12.2704 6.84375 11.8783 6.84375 11.4694ZM6.84375 19.1777C6.84375 18.7689 7.00618 18.3767 7.29529 18.0876C7.58441 17.7985 7.97654 17.6361 8.38542 17.6361H29.9688C30.3776 17.6361 30.7698 17.7985 31.0589 18.0876C31.348 18.3767 31.5104 18.7689 31.5104 19.1777C31.5104 19.5866 31.348 19.9787 31.0589 20.2679C30.7698 20.557 30.3776 20.7194 29.9688 20.7194H8.38542C7.97654 20.7194 7.58441 20.557 7.29529 20.2679C7.00618 19.9787 6.84375 19.5866 6.84375 19.1777ZM6.84375 26.8861C6.84375 26.4772 7.00618 26.0851 7.29529 25.7959C7.58441 25.5068 7.97654 25.3444 8.38542 25.3444H29.9688C30.3776 25.3444 30.7698 25.5068 31.0589 25.7959C31.348 26.0851 31.5104 26.4772 31.5104 26.8861C31.5104 27.2949 31.348 27.6871 31.0589 27.9762C30.7698 28.2653 30.3776 28.4277 29.9688 28.4277H8.38542C7.97654 28.4277 7.58441 28.2653 7.29529 27.9762C7.00618 27.6871 6.84375 27.2949 6.84375 26.8861Z"
              fill="black"
            />
          </Box>

          <Stack
            bg={"white"}
            flex={"1"}
            flexBasis={"418px"}
            flexDir={{ base: "column", lg: "row" }}
            h={{ base: "300px", lg: "auto" }}
            justifyContent={{ base: "center", lg: "flex-start" }}
            maxW={{ base: "690px", lg: "auto" }}
            position={{ base: "absolute", lg: "relative" }}
            spacing={{ base: 0 }}
            top={{ base: "90px", lg: "auto" }}
            transform={{
              base: isOpen ? "translateY(0)" : "translateY(-140%)",
              lg: "translateY(0)",
            }}
            transition={"transform 1s ease-in-out"}
            w={{ base: "full", lg: "auto" }}
            zIndex={{ base: -1, lg: 1 }}
          >
            <ChakraLink
              _hover={{
                textDecoration: "none",
              }}
              alignItems={"center"}
              as={Link}
              border={{ base: "5px solid black", lg: 0 }}
              borderBottom={0}
              borderX={{ lg: "5px solid black" }}
              display={{ base: "none", lg: "flex" }}
              flex={"1"}
              fontSize={{ base: 24, sm: 56, lg: 24 }}
              fontWeight={"medium"}
              href={"/"}
              p={{ base: 0, md: 7 }}
              position={"relative"}
              role={"group"}
              textAlign={"center"}
              onClick={() => setIsOpen(false)}
            >
              Home
              <Box
                _groupHover={{ display: "block" }}
                as={"span"}
                bg={"#FFDC58"}
                display={"none"}
                h={{ base: "40px", lg: "20px" }}
                position={"absolute"}
                w={{ base: "30%", lg: "60%" }}
                zIndex={-1}
              />
            </ChakraLink>
            <ChakraLink
              _hover={{
                textDecoration: "none",
              }}
              alignItems={"center"}
              as={Link}
              border={{ base: "5px solid black", lg: 0 }}
              borderBottom={0}
              borderRight={{ lg: "5px solid black" }}
              display={"flex"}
              flex={"1"}
              fontSize={{ base: 24, sm: 56, lg: 24 }}
              fontWeight={"medium"}
              href={"#about"}
              justifyContent={"center"}
              p={{ base: 0, md: 7 }}
              position={"relative"}
              role={"group"}
              textAlign={"center"}
              onClick={() => setIsOpen(false)}
            >
              About
              <Box
                _groupHover={{ display: "block" }}
                as={"span"}
                bg={"#FFDC58"}
                display={"none"}
                h={{ base: "40px", lg: "20px" }}
                position={"absolute"}
                w={{ base: "30%", lg: "60%" }}
                zIndex={-1}
              />
            </ChakraLink>
            <ChakraLink
              _hover={{
                textDecoration: "none",
              }}
              alignItems={"center"}
              as={Link}
              border={{ base: "5px solid black", lg: 0 }}
              borderBottom={0}
              display={"flex"}
              flex={"1"}
              fontSize={{ base: 24, sm: 56, lg: 24 }}
              fontWeight={"medium"}
              href={"#projects"}
              justifyContent={"center"}
              p={{ base: 0, md: 7 }}
              position={"relative"}
              role={"group"}
              textAlign={"center"}
              onClick={() => setIsOpen(false)}
            >
              Projects
              <Box
                _groupHover={{ display: "block" }}
                as={"span"}
                bg={"#FFDC58"}
                display={"none"}
                h={{ base: "40px", lg: "20px" }}
                position={"absolute"}
                w={{ base: "30%", lg: "60%" }}
                zIndex={-1}
              />
            </ChakraLink>
            <ChakraLink
              _hover={{
                textDecoration: "none",
              }}
              alignItems={"center"}
              as={Link}
              border={{ base: "5px solid black", lg: 0 }}
              display={{ base: "flex", lg: "none" }}
              flex={"1"}
              fontSize={{ base: 24, sm: 56, lg: 24 }}
              fontWeight={"medium"}
              href={"#contact"}
              justifyContent={"center"}
              p={{ base: 0, md: 7 }}
              position={"relative"}
              role={"group"}
              textAlign={"center"}
              onClick={() => setIsOpen(false)}
            >
              Contact
              <Box
                _groupHover={{ display: "block" }}
                as={"span"}
                bg={"#FFDC58"}
                display={"none"}
                h={{ base: "40px", lg: "33px" }}
                position={"absolute"}
                w={"30%"}
                zIndex={-1}
              />
            </ChakraLink>
          </Stack>
          <HStack>
            <HStack>
              <Box
                bg={"white"}
                border={"3px solid black"}
                h={"14px"}
                left={"-12px"}
                position={"absolute"}
                shadow={"navbar"}
                top={"-14px"}
                w={"14px"}
              />

              <Box
                bg={"white"}
                border={"3px solid black"}
                bottom={"-12px"}
                h={"14px"}
                left={"-8px"}
                position={"absolute"}
                shadow={"navbar"}
                w={"14px"}
                zIndex={1}
              />
            </HStack>
            <HStack>
              <Box
                bg={"white"}
                border={"3px solid black"}
                h={"14px"}
                position={"absolute"}
                right={"-8px"}
                shadow={"navbar"}
                top={"-7px"}
                w={"14px"}
              />

              <Box
                bg={"white"}
                border={"3px solid black"}
                bottom={"-12px"}
                h={"14px"}
                position={"absolute"}
                right={"-8px"}
                shadow={"navbar"}
                w={"14px"}
              />
            </HStack>
          </HStack>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Navbar;
