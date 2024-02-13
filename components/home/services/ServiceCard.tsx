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
          justifyContent={"center"}
          w={{ base: "52px", md: "70px" }}
          h={{ base: "52px", md: "70px" }}
          p={"8px 11px 7.2px 11px"}
          borderRadius={"50px"}
          border={"3px solid #000"}
          bg={"#C5A1FF"}
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
        as={Link}
        href={"#"}
        fontSize={{ base: 26, md: 36 }}
        fontWeight={"medium"}
        p={{ base: "20px 19px", md: "31px 26px" }}
        borderTop={"3px solid #000"}
        w={"full"}
        transition={"all 0.5s"}
        _hover={{
          bg: "orange.200",
          color: "white",
        }}
      >
        Learn more{" "}
      </ChakraLink>
    </VStack>
  );
};

export default ServiceCard;
