import React from "react";
import { HStack, Heading, VStack, Box, Grid } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import smileFace from "@/public/assets/smileFace.svg";
import leftFlower from "@/public/assets/navbarLeftFlower.svg";
import rightFlower from "@/public/assets/serviceRightFlower.svg";
import ServiceCard from "./ServiceCard";

const Services: NextPage = () => {
  return (
    <VStack
      alignItems={"center"}
      justifyContent={"center"}
      mb={{ base: 5, lg: 20 }}
      mt={16}
      position={"relative"}
      w={"full"}
    >
      <Box
        alt={"left flower"}
        as={Image}
        display={{ base: "none", md: "block" }}
        left={"0px"}
        position={"absolute"}
        src={leftFlower}
        top={"330px"}
      />

      <Box
        alt={"left flower"}
        as={Image}
        bottom={"30px"}
        display={{ base: "none", md: "block" }}
        position={"absolute"}
        right={"0px"}
        src={rightFlower}
      />

      <VStack
        alignItems={"flex-start"}
        maxW={"1327px"}
        mx={"auto"}
        position={"relative"}
        px={{ base: 5 }}
        spacing={{ base: 6, md: 20 }}
      >
        <HStack spacing={9} w={{ md: "700px" }}>
          <Heading
            as={"h3"}
            fontSize={{ base: 20, md: 40, xl: 48 }}
            fontWeight={"medium"}
          >
            Services we’re providing that derive desired result
          </Heading>

          <Box
            alt={"smile face"}
            as={Image}
            h={{ base: "29px", md: "59px" }}
            src={smileFace}
            transform={"rotate(8.958deg)"}
            w={{ base: "32px", md: "64px" }}
          />
        </HStack>

        <Grid
          mx={{ base: "auto" }}
          style={{ direction: "rtl" }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <ServiceCard key={index} />
          ))}
        </Grid>
      </VStack>
    </VStack>
  );
};

export default Services;
