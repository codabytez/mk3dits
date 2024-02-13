"use client";
import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import projectSmileImage from "@/public/assets/projectSmileFace.svg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { ChakraSvg } from "@/helpers/customChakra";

const Projects: NextPage = () => {
  return (
    <VStack w={"full"}>
      <VStack w={"full"} spacing={{ base: 4, lg: 20 }}>
        <HStack
          w={{ md: "664px" }}
          h={"160px"}
          position={"relative"}
          mx={"auto"}
        >
          <Heading
            as={"h2"}
            fontSize={{ base: 40, md: 80 }}
            position={"relative"}
            w={{ md: "496px" }}
            h={{ base: "50px", md: "101px" }}
          >
            My Projects
            <Box
              as={"svg"}
              position={"absolute"}
              bottom={0}
              right={0}
              xmlns="http://www.w3.org/2000/svg"
              width={{ base: "177.4px", md: "358px" }}
              height={{ base: "7.5px", md: "15px" }}
              viewBox="0 0 358 15"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M355.698 8.90703C285.182 1.05767 213.473 5.39925 142.78 3.98596C96.0339 3.04038 49.2843 0.762796 2.57201 0.000228063C1.17151 -0.0201071 0.0196797 1.32197 0.000228214 3.00979C-0.0183775 4.69761 1.10303 6.08044 2.50269 6.10077C49.2099 6.86334 95.9544 9.14092 142.695 10.0865C213.262 11.4998 284.835 7.14802 355.224 14.9872C356.619 15.1397 357.854 13.9095 357.989 12.2318C358.116 10.5542 357.085 9.06971 355.698 8.90703Z"
                fill="black"
              />
            </Box>
          </Heading>
          <Box
            position={"relative"}
            w={{ base: "53px", md: "121px" }}
            h={{ base: "54px", md: "125px" }}
          >
            <Image src={projectSmileImage} alt={"smile face"} />
            <ChakraSvg
              position={"absolute"}
              bottom={{ base: 0, md: 0 }}
              right={{ base: "23px", md: "45px" }}
              animate={{
                y: [0, 10, 0],
              }}
              //   @ts-ignore
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width={{ base: "16px", md: "53px" }}
              height={{ base: "17px", md: "34px" }}
              viewBox="0 0 53 34"
              fill="none"
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
          justifyContent={"center"}
          spacing={"96px"}
          flexWrap={"wrap"}
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
