import React from "react";
import { NextPage } from "next";
import { VStack, HStack, Text, Heading } from "@chakra-ui/react";

const Typography: NextPage = () => {
  return (
    <VStack maxW={"1090px"} w={"full"} alignItems={"flex-start"}>
      <VStack maxW={"800px"} w={"full"} alignItems={"flex-start"} spacing={10}>
        <Heading
          as={"h4"}
          color={"#030303"}
          fontSize={48}
          fontWeight={500}
          lineHeight={"56px"}
        >
          Typography
        </Heading>

        <HStack alignItems={"flex-start"} position={"relative"}>
          <Text color={"#2F2E2E"} fontSize={32} position={"absolute"}>
            Headings
          </Text>
          <Text color={"#030303"} fontSize={256}>
            Aa
          </Text>
          <Text
            color={"#656565"}
            fontSize={32}
            position={"absolute"}
            bottom={"45px"}
            right={"-60px"}
          >
            SF Pro
          </Text>
        </HStack>

        <HStack alignItems={"flex-start"} position={"relative"}>
          <Text color={"#2F2E2E"} fontSize={32} position={"absolute"}>
            Body
          </Text>
          <Text color={"#030303"} fontSize={256}>
            Aa
          </Text>
          <Text
            color={"#656565"}
            fontSize={32}
            position={"absolute"}
            bottom={"45px"}
            right={"-60px"}
          >
            SF Pro
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Typography;
