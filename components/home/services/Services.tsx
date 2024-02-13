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
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={16}
      mb={{ base: 5, lg: 20 }}
      w={"full"}
    >
      <Box
        as={Image}
        src={leftFlower}
        alt={"left flower"}
        position={"absolute"}
        top={"330px"}
        left={"0px"}
        display={{ base: "none", md: "block" }}
      />

      <Box
        as={Image}
        src={rightFlower}
        alt={"left flower"}
        position={"absolute"}
        bottom={"30px"}
        right={"0px"}
        display={{ base: "none", md: "block" }}
      />

      <VStack
        alignItems={"flex-start"}
        position={"relative"}
        spacing={{ base: 6, md: 20 }}
        maxW={"1327px"}
        mx={"auto"}
        px={{ base: 5 }}
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
            as={Image}
            src={smileFace}
            alt={"smile face"}
            transform={"rotate(8.958deg)"}
            w={{ base: "32px", md: "64px" }}
            h={{ base: "29px", md: "59px" }}
          />
        </HStack>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          style={{ direction: "rtl" }}
          mx={{ base: "auto" }}
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
