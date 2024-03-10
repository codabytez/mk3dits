import React from "react";
import { NextPage } from "next";
import { VStack, HStack, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import icon from "@/public/assets/logoIcon.svg";

const ProjectMetaData: NextPage = () => {
  return (
    <VStack>
      {" "}
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
    </VStack>
  );
};

export default ProjectMetaData;
