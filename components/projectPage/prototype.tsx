import React from "react";
import { NextPage } from "next";
import { VStack, HStack, Heading, Text } from "@chakra-ui/react";
import Button from "../Button";
import Image from "next/image";
import prototypeFace from "@/public/assets/projectSmileFace.svg";

const Prototype: NextPage = () => {
  return (
    <VStack maxW={"1090px"} w={"full"} alignItems={"flex-start"} spacing={10}>
      <Heading
        as={"h4"}
        color={"#030303"}
        fontSize={48}
        fontWeight={500}
        lineHeight={"56px"}
        display={"flex"}
        gap={6}
      >
        Prototype{" "}
        <Image
          alt={"prototype smile face"}
          src={prototypeFace}
          width={50}
          height={50}
        />
      </Heading>

      <HStack w={"full"} spacing={5} pos={"relative"}>
        <VStack pos={"absolute"} right={0} bottom={"-93px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1080"
            height="923"
            viewBox="0 0 1080 923"
            fill="none"
          >
            <path
              d="M910.531 923C924.768 923 936.904 912.675 939.184 898.621L1079.54 33.6774C1082.4 16.0212 1068.77 6.03257e-05 1050.88 5.95438e-05L169.468 2.1016e-05C155.231 2.03936e-05 143.095 10.3253 140.815 24.3786L0.464601 889.323C-2.40039 906.979 11.2307 923 29.1178 923L910.531 923Z"
              fill="#847603"
              fillOpacity="0.1"
            />
          </svg>
        </VStack>
        <VStack
          alignItems={"flex-start"}
          w={"424px"}
          h={"873px"}
          borderRadius={60}
          border={"1px solid black"}
          overflow={"hidden"}
        >
          <Image
            alt={"mushImage"}
            src={"https://picsum.photos/425/900?grayscale"}
            width={424}
            height={873}
          />
        </VStack>

        <VStack spacing={10} flex={"1 0 0"} alignItems={"flex-start"}>
          <Text
            maxW={"646px"}
            color={"#030303"}
            fontSize={20}
            lineHeight={"32px"}
          >
            Our Figma prototype for the recipe search mobile application
            showcases a seamless and intuitive user experience tailored to meet
            the needs of cooking enthusiasts. With a focus on simplicity and
            efficiency, users can effortlessly search for recipes using specific
            ingredients, transforming their kitchen into a hub of culinary
            creativity. The prototype features a user-friendly interface with a
            prominent search bar, inviting users to input their ingredients and
            discover a wide array of recipes. Advanced filtering options allow
            users to customize their search results based on dietary
            preferences, cuisine types, and cooking difficulty levels, ensuring
            a personalized experience for every user. Detailed recipe pages
            provide comprehensive information, including ingredients,
            step-by-step instructions, and nutritional facts, accompanied by
            high-quality visuals to tantalize the taste buds. Users can save
            their favorite recipes, create shopping lists, and even share their
            culinary creations with the community, fostering a sense of
            connection and inspiration.
          </Text>

          <Button>View Figma Link</Button>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Prototype;
