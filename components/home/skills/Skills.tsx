import { HStack, Heading, VStack, Box, Grid } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import smileFace from "@/public/assets/smileFace.svg";
import ServiceCard from "../services/ServiceCard";

const Skills: NextPage = () => {
  return (
    <VStack
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      my={20}
      w={"full"}
    >
      <VStack
        alignItems={"flex-start"}
        position={"relative"}
        spacing={{ base: 6, md: 20 }}
        maxW={"1327px"}
        mx={"auto"}
        px={{ base: 5 }}
      >
        <HStack spacing={9} alignItems={"flex-start"}>
          <Heading
            as={"h3"}
            fontSize={{ base: 20, md: 40, xl: 48 }}
            fontWeight={"medium"}
          >
            Additional Skills
          </Heading>

          <Box
            as={Image}
            src={smileFace}
            alt={"smile face"}
            transform={"rotate(-176.095deg)"}
            w={{ base: "32px", md: "64px" }}
            h={{ base: "29px", md: "59px" }}
          />
        </HStack>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          style={{ direction: "rtl" }}
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
