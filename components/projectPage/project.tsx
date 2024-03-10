import React from "react";
import { NextPage } from "next";
import {
  HStack,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import icon from "@/public/assets/logoIcon.svg";
import sadFace from "@/public/assets/sadFace.svg";
import smileFace from "@/public/assets/smileFace.svg";
import Prototype from "./prototype";
import UiScreen from "./uiScreens";
import Typography from "./typography";
import Colors from "./colors";

const Project: NextPage = () => {
  return (
    <VStack mt={{ base: "110px", xl: "200px" }} spacing={20}>
      <VStack spacing={10} alignSelf={"stretch"}>
        <VStack>
          <Heading
            as={"h1"}
            color={"#030303"}
            textAlign={"center"}
            fontSize={50}
            fontWeight={700}
          >
            Mr Fungi:
          </Heading>
          <Text
            color={"#656565"}
            fontSize={50}
            fontWeight={700}
            textAlign={"center"}
          >
            Recipe search tool
          </Text>
        </VStack>

        <Text
          maxW={"870px"}
          color={"#2F2E2E"}
          fontSize={24}
          textAlign={"center"}
          lineHeight={"32px"}
        >
          A mobile application that makes it possible for users to search for
          recipes making use of ingredient(s) as keywords
        </Text>
      </VStack>

      <VStack
        alignSelf={"stretch"}
        alignItems={"flex-start"}
        spacing={2}
        flex={"1 0 0"}
      >
        <Image
          alt={"project"}
          src={"https://picsum.photos/seed/food/1296/762?grayscale"}
          width={1296}
          height={762}
        />

        <HStack spacing={6} p={"12px 40px"} alignSelf={"stretch"}>
          <Image alt={"icon"} src={icon} />
          <VStack spacing={2} alignItems={"flex-start"}>
            <Text
              color={"#2F2E2E"}
              fontSize={18}
              fontWeight={700}
              lineHeight={"24px"}
            >
              Tools
            </Text>

            <Text color={"#2F2E2E"} fontSize={16} lineHeight={"24px"}>
              Figma (Product design, Branding)
            </Text>
          </VStack>
        </HStack>
      </VStack>

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

      <VStack maxW={"1090px"} w={"full"} alignItems={"flex-start"}>
        <VStack maxW={"800px"} alignItems={"flex-start"} spacing={10}>
          <Heading
            as={"h4"}
            color={"#030303"}
            fontSize={48}
            fontWeight={500}
            lineHeight={"56px"}
          >
            Logo Design
          </Heading>

          <HStack spacing={"54px"}>
            <HStack spacing={3}>
              <Image
                alt={"mushImage"}
                src={"https://picsum.photos/202/225?grayscale"}
                width={202}
                height={225}
              />
              <Text
                color={"#E16A26"}
                fontSize={32}
                fontWeight={600}
                lineHeight={"56px"}
              >
                +
              </Text>
              <Image
                alt={"mushImage"}
                src={"https://picsum.photos/202/225?grayscale"}
                width={202}
                height={225}
              />
            </HStack>

            <Text
              color={"#E16A26"}
              fontSize={32}
              fontWeight={600}
              lineHeight={"56px"}
            >
              =
            </Text>

            <Image
              alt={"mushImage"}
              src={"https://picsum.photos/202/225?grayscale"}
              width={202}
              height={225}
            />
          </HStack>
        </VStack>
      </VStack>

      <Colors />

      <Typography />

      <UiScreen />

      <Prototype />
    </VStack>
  );
};

export default Project;
