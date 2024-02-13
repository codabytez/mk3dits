import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import ProjectCardBox from "./ProjectCardBox";

const stacks = ["UI Design", "User Research", "Webflow Develop"];

const ProjectCard: NextPage = () => {
  return (
    <VStack
      w={{ base: "316px", md: "535px" }}
      h={{ base: "316px", md: "536px" }}
      shadow={{ base: "projectMobile", md: "project" }}
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={1}
    >
      <VStack
        w={"full"}
        h={"full"}
        bg={"white"}
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
        zIndex={1}
        spacing={"35px"}
        p={"45px 35px"}
      >
        <Image
          src={"https://picsum.photos/464/294?grayscale"}
          width={464}
          height={294}
          alt={"project"}
          style={{
            border: "4.416px solid #000",
            background:
              "linear-gradient(0deg, rgba(228, 192, 192, 0.06) 0%, rgba(228, 192, 192, 0.06) 100%), lightgray 50% / cover no-repeat",
          }}
        />

        <HStack
          w={"full"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
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
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.5997 3.84119L11.9967 10.499M11.5997 3.84119L4.94189 4.23822M11.5997 3.84119L4.29546 12.0718"
                stroke="#FDFDFD"
                strokeWidth="1.41492"
                strokeLinecap="round"
                strokeLinejoin="round"
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
