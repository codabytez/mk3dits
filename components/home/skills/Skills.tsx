import React from "react";
import { HStack, Heading, VStack, Box, Grid } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import smileFace from "@/public/assets/smileFace.svg";
import ServiceCard from "../services/ServiceCard";

const Skills: NextPage = () => {
  return (
    <VStack
      alignItems={"center"}
      justifyContent={"center"}
      my={20}
      position={"relative"}
      w={"full"}
    >
      <VStack
        alignItems={"flex-start"}
        maxW={"1327px"}
        mx={"auto"}
        position={"relative"}
        px={{ base: 5 }}
        spacing={{ base: 6, md: 20 }}
      >
        <HStack alignItems={"flex-start"} spacing={9}>
          <Heading
            as={"h3"}
            fontSize={{ base: 20, md: 40, xl: 48 }}
            fontWeight={"medium"}
          >
            Additional Skills
          </Heading>

          <Box
            alt={"smile face"}
            as={Image}
            h={{ base: "29px", md: "59px" }}
            src={smileFace}
            transform={"rotate(-176.095deg)"}
            w={{ base: "32px", md: "64px" }}
          />
        </HStack>

        <Grid
          style={{ direction: "rtl" }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <ServiceCard key={index} />
          ))}
        </Grid>
      </VStack>
    </VStack>
  );
};

export default Skills;
