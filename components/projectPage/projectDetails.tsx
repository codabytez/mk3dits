import React from "react";
import { NextPage } from "next";
import {
  VStack,
  HStack,
  Text,
  Heading,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import sadFace from "@/public/assets/sadFace.svg";
import smileFace from "@/public/assets/smileFace.svg";

const ProjectDetails: NextPage = () => {
  return (
    <VStack maxW={"1090px"} w={"full"} alignItems={"flex-start"} spacing={20}>
      <HStack
        justifyContent={"space-between"}
        w={"full"}
        spacing={10}
        maxW={"1090px"}
      >
        <VStack maxW={"800px"} alignItems={"flex-start"} spacing={5}>
          <Heading
            as={"h4"}
            color={"#030303"}
            fontSize={48}
            fontWeight={500}
            lineHeight={"56px"}
          >
            Sector
          </Heading>
          <Text color={"#2F2E2E"} fontSize={20}>
            Food, Health, Edu
          </Text>
        </VStack>

        <VStack maxW={"800px"} alignItems={"flex-start"} spacing={5}>
          <Heading
            as={"h4"}
            color={"#030303"}
            fontSize={48}
            fontWeight={500}
            lineHeight={"56px"}
          >
            Timeline
          </Heading>
          <Text color={"#2F2E2E"} fontSize={20}>
            May 4 - May 6 2023
          </Text>
        </VStack>

        <VStack maxW={"800px"} alignItems={"flex-start"} spacing={5}>
          <Heading
            as={"h4"}
            color={"#030303"}
            fontSize={48}
            fontWeight={500}
            lineHeight={"56px"}
          >
            Design role
          </Heading>
          <Text color={"#2F2E2E"} fontSize={20}>
            Product, UX/UI, Research, Branding
          </Text>
        </VStack>
      </HStack>

      <VStack
        maxW={"1090px"}
        alignItems={"flex-start"}
        spacing={10}
        borderRadius={"40px"}
      >
        <Heading
          as={"h4"}
          color={"#030303"}
          fontSize={48}
          fontWeight={500}
          lineHeight={"56px"}
        >
          Design Goal
        </Heading>
        <Text color={"#2F2E2E"} fontSize={20}>
          The design goal for this mobile application is to create a
          user-friendly and efficient platform that empowers users to
          effortlessly search for recipes based on specific ingredients. The
          primary aim is to simplify the cooking experience, making it
          convenient for users to find recipes that match the ingredients they
          have on hand
        </Text>
      </VStack>

      <VStack
        maxW={"1090px"}
        alignItems={"flex-start"}
        spacing={10}
        borderRadius={"40px"}
      >
        <Heading
          as={"h4"}
          color={"#030303"}
          fontSize={48}
          fontWeight={500}
          lineHeight={"56px"}
          display={"flex"}
          gap={3}
        >
          Problem{" "}
          <Image
            alt={"sad face"}
            src={sadFace}
            style={{
              transform: "rotate(9deg)",
            }}
          />
        </Heading>
        <Text color={"#2F2E2E"} fontSize={20}>
          Cooking enthusiasts often face the challenge of deciding what to
          prepare based on the ingredients available in their kitchen.
          Traditional recipe apps may require users to search by dish names,
          limiting their ability to utilize existing ingredients creatively.
          This can result in food waste and a lack of variety in meals. The
          problem is the lack of a streamlined and intuitive solution that
          allows users to search for recipes using specific ingredients.
        </Text>
      </VStack>

      <VStack
        w={"full"}
        maxW={"1090px"}
        alignItems={"flex-start"}
        spacing={10}
        borderRadius={"40px"}
      >
        <Heading
          as={"h4"}
          color={"#030303"}
          fontSize={48}
          fontWeight={500}
          lineHeight={"56px"}
          display={"flex"}
          gap={3}
        >
          My Solutions{" "}
          <Image
            alt={"smile face"}
            src={smileFace}
            style={{
              transform: "rotate(9deg)",
            }}
          />
        </Heading>

        <OrderedList>
          <ListItem color={"#2F2E2E"} fontSize={20} fontWeight={500}>
            Ingredient-Centric Search:
          </ListItem>
          <UnorderedList>
            <ListItem color={"#2F2E2E"} fontSize={20}>
              Implement a robust search feature that enables users to input one
              or more ingredients as keywords.
            </ListItem>
            <ListItem color={"#2F2E2E"} fontSize={20}>
              Utilize a smart algorithm that suggests recipes based on the
              entered ingredients, ensuring accurate and relevant results.
            </ListItem>
          </UnorderedList>

          <ListItem color={"#2F2E2E"} fontSize={20} fontWeight={500}>
            User-Friendly Interface:
          </ListItem>
          <UnorderedList>
            <ListItem color={"#2F2E2E"} fontSize={20}>
              Design an intuitive and visually appealing interface that is easy
              to navigate.
            </ListItem>
            <ListItem color={"#2F2E2E"} fontSize={20}>
              Provide clear calls-to-action for searching, filtering, and saving
              recipes.
            </ListItem>
          </UnorderedList>

          <ListItem color={"#2F2E2E"} fontSize={20} fontWeight={500}>
            Filtering and Sorting Options:
          </ListItem>
          <UnorderedList>
            <ListItem color={"#2F2E2E"} fontSize={20}>
              Include advanced filtering options, allowing users to refine their
              search results based on dietary preferences, cuisine types, or
              difficulty levels.
            </ListItem>
            <ListItem color={"#2F2E2E"} fontSize={20}>
              Implement sorting features, such as popularity or cooking time, to
              enhance user customization.
            </ListItem>
          </UnorderedList>

          <ListItem color={"#2F2E2E"} fontSize={20} fontWeight={500}>
            Recipe Details and Visuals:
          </ListItem>
          <UnorderedList>
            <ListItem color={"#2F2E2E"} fontSize={20}>
              Display detailed recipe information, including ingredients,
              step-by-step instructions, and nutritional facts.
            </ListItem>
          </UnorderedList>
        </OrderedList>
      </VStack>
    </VStack>
  );
};

export default ProjectDetails;
