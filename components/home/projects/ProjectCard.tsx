import React from "react";
import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import ProjectCardBox from "./ProjectCardBox";

const stacks = ["UI Design", "User Research", "Webflow Develop"];

const ProjectCard: NextPage = () => {
  return (
    <VStack
      alignItems={"center"}
      h={{ base: "316px", md: "536px" }}
      justifyContent={"center"}
      position={"relative"}
      shadow={{ base: "projectMobile", md: "project" }}
      w={{ base: "316px", md: "535px" }}
      zIndex={1}
    >
      <VStack
        alignItems={"center"}
        bg={"white"}
        h={"full"}
        justifyContent={"center"}
        p={"45px 35px"}
        position={"relative"}
        spacing={"35px"}
        w={"full"}
        zIndex={1}
      >
        <Image
          alt={"project"}
          height={294}
          src={"https://picsum.photos/464/294?grayscale"}
          style={{
            border: "4.416px solid #000",
            background:
              "linear-gradient(0deg, rgba(228, 192, 192, 0.06) 0%, rgba(228, 192, 192, 0.06) 100%), lightgray 50% / cover no-repeat",
          }}
          width={464}
        />

        <HStack
          alignItems={"flex-end"}
          justifyContent={"space-between"}
          w={"full"}
        >
          <VStack alignItems={"flex-start"} spacing={3}>
            <Heading
              as={"h3"}
              fontSize={{ base: 20, md: 36 }}
              fontWeight={"bold"}
            >
              Project Name
            </Heading>
            <Text
              fontSize={{ base: 15, md: 24 }}
              fontWeight={"medium"}
              w={{ base: "200px", md: "339px" }}
            >
              {stacks.join(" - ")}
            </Text>
          </VStack>
          <Button
            display={{ base: "none", md: "flex" }}
            size={"xs"}
            variant={"tertiary"}
          >
            View
          </Button>
          <Button
            display={{ base: "flex", md: "none" }}
            size={"xs"}
            variant={"tertiary"}
          >
            <svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5997 3.84119L11.9967 10.499M11.5997 3.84119L4.94189 4.23822M11.5997 3.84119L4.29546 12.0718"
                stroke="#FDFDFD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.41492"
              />
            </svg>
          </Button>
        </HStack>
      </VStack>

      <ProjectCardBox />
    </VStack>
  );
};

export default ProjectCard;
