"use client";
import React from "react";
import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import projectSmileImage from "@/public/assets/projectSmileFace.svg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { ChakraSvg } from "@/helpers/customChakra";

const Projects: NextPage = () => {
  return (
    <VStack id={"projects"} w={"full"}>
      <VStack spacing={{ base: 4, lg: 20 }} w={"full"}>
        <HStack
          h={"160px"}
          mx={"auto"}
          position={"relative"}
          w={{ md: "664px" }}
        >
          <Heading
            as={"h2"}
            fontSize={{ base: 40, md: 80 }}
            h={{ base: "50px", md: "101px" }}
            position={"relative"}
            w={{ md: "496px" }}
          >
            My Projects
            <Box
              as={"svg"}
              bottom={0}
              fill="none"
              height={{ base: "7.5px", md: "15px" }}
              position={"absolute"}
              right={0}
              viewBox="0 0 358 15"
              width={{ base: "177.4px", md: "358px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M355.698 8.90703C285.182 1.05767 213.473 5.39925 142.78 3.98596C96.0339 3.04038 49.2843 0.762796 2.57201 0.000228063C1.17151 -0.0201071 0.0196797 1.32197 0.000228214 3.00979C-0.0183775 4.69761 1.10303 6.08044 2.50269 6.10077C49.2099 6.86334 95.9544 9.14092 142.695 10.0865C213.262 11.4998 284.835 7.14802 355.224 14.9872C356.619 15.1397 357.854 13.9095 357.989 12.2318C358.116 10.5542 357.085 9.06971 355.698 8.90703Z"
                fill="black"
                fillRule="evenodd"
              />
            </Box>
          </Heading>
          <Box
            h={{ base: "54px", md: "125px" }}
            position={"relative"}
            w={{ base: "53px", md: "121px" }}
          >
            <Image alt={"smile face"} src={projectSmileImage} />
            <ChakraSvg
              animate={{
                y: [0, 10, 0],
              }}
              bottom={{ base: 0, md: 0 }}
              fill="none"
              height={{ base: "17px", md: "34px" }}
              position={"absolute"}
              right={{ base: "23px", md: "45px" }}
              //   @ts-ignore
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              viewBox="0 0 53 34"
              width={{ base: "16px", md: "53px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.207091 0.77008L22.5613 33.6703L52.0872 12.5804L25.5142 6.67534L0.207091 0.77008Z"
                fill="#FFDC58"
              />
            </ChakraSvg>
          </Box>
        </HStack>

        <HStack
          alignItems={"flex-start"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          spacing={"96px"}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Projects;
