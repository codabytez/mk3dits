import React from "react";
import { Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const ServiceCard: NextPage = () => {
  return (
    <VStack
      alignItems={"flex-start"}
      border={"3px solid #000"}
      flex={1}
      flexShrink={0}
      style={{ direction: "ltr" }}
      w={{ md: "527px", lg: "427px" }}
    >
      <VStack
        alignItems={"flex-start"}
        p={{ base: "44px 19px", md: "60px 26px" }}
        spacing={{ base: 3, md: 5 }}
      >
        <VStack
          bg={"#C5A1FF"}
          border={"3px solid #000"}
          borderRadius={"50px"}
          h={{ base: "52px", md: "70px" }}
          justifyContent={"center"}
          p={"8px 11px 7.2px 11px"}
          w={{ base: "52px", md: "70px" }}
        ></VStack>
        <Heading as={"h4"} fontSize={{ base: 26, md: 36 }} fontWeight={"bold"}>
          UX Strategy
        </Heading>
        <Text
          fontSize={{ base: 16, md: 24 }}
          fontWeight={"medium"}
          w={{ base: "249px", md: "439px", lg: "339px" }}
        >
          Services we’re providing that derive 99% result
        </Text>
      </VStack>

      <ChakraLink
        _hover={{
          bg: "orange.200",
          color: "white",
        }}
        as={Link}
        borderTop={"3px solid #000"}
        fontSize={{ base: 26, md: 36 }}
        fontWeight={"medium"}
        href={"#"}
        p={{ base: "20px 19px", md: "31px 26px" }}
        transition={"all 0.5s"}
        w={"full"}
      >
        Learn more{" "}
      </ChakraLink>
    </VStack>
  );
};

export default ServiceCard;
