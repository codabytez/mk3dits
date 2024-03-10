import React from "react";
import { NextPage } from "next";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "../home/projects/ProjectCard";

const ViewMore: NextPage = () => {
  return (
    <VStack spacing={"64px"} alignItems={"flex-start"}>
      <VStack maxW={"1090px"} w={"full"} alignItems={"flex-start"}>
        <Heading as={"h2"} fontSize={80}>
          {"You've"} reached the end...why not take a look at my other projects
        </Heading>
      </VStack>

      <HStack
        spacing={10}
        pr={20}
        pl={8}
        py={5}
        w={"1292px"}
        overflowX={"scroll"}
        overflowY={"visible"}
        style={{ scrollbarWidth: "none" }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </HStack>
    </VStack>
  );
};

export default ViewMore;
