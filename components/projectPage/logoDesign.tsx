import React from "react";
import { NextPage } from "next";
import { VStack, HStack, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

const LogoDesign: NextPage = () => {
  return (
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
  );
};

export default LogoDesign;
