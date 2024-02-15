import React from "react";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const TestimonialCard: NextPage = () => {
  return (
    <VStack
      alignItems={"flex-start"}
      bg={"white"}
      border={{ base: "2px solid #000", md: "4px solid #000" }}
      borderRadius={"2px"}
      p={{ base: 5, md: 10 }}
      shadow={{ base: "testimonialMobile", md: "testimonial" }}
      spacing={{ base: "17px", md: "35px" }}
      w={{ base: "323px", md: "645.3px" }}
    >
      <Heading
        alignSelf={"stretch"}
        as={"h5"}
        color={"darkGray.200"}
        fontSize={{ base: 15, md: 28 }}
        fontWeight={"medium"}
      >
        “Design is a bridge that connects everyone and everything”
      </Heading>

      <HStack alignSelf={"stretch"} spacing={{ base: 3, md: 5 }}>
        <Box
          border={{ base: "1.5px solid black", md: "3px solid black" }}
          borderRadius={"92px"}
          height={{ base: 46, md: 92 }}
          overflow={"hidden"}
          width={{ base: 46, md: 92 }}
        >
          <Image
            alt={"client"}
            height={92}
            src={"https://picsum.photos/100/100"}
            width={92}
          />
        </Box>

        <VStack
          alignItems={"flex-start"}
          flex={"1 0 0"}
          spacing={{ base: 1, md: 3 }}
        >
          <Heading
            as={"h5"}
            fontSize={{ base: 15, md: 28 }}
            fontWeight={"semibold"}
          >
            Client Name
          </Heading>
          <Text
            alignSelf={"stretch"}
            color={"#545454"}
            fontSize={{ base: 12, md: 25 }}
            fontWeight={"medium"}
          >
            UX Designer, Company Name
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default TestimonialCard;
