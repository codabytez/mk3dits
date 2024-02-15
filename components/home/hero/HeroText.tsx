import React from "react";
import { NextPage } from "next";
import { VStack, Heading, Text, Box, Stack } from "@chakra-ui/react";
import Button from "@/components/Button";
import HeroSmileIcon from "./HeroSmileIcon";

const HeroText: NextPage = () => {
  return (
    <VStack
      alignItems={{ base: "flex-start", md: "center", xl: "flex-start" }}
      justifyContent={{ base: "flex-start", md: "center", xl: "flex-start" }}
      maxW={"716px"}
      spacing={{ base: 8 }}
    >
      <VStack
        alignItems={{ base: "flex-start", md: "center", xl: "flex-start" }}
        gap={8}
        justifyContent={{ base: "flex-start", md: "center", xl: "flex-start" }}
      >
        <HeroSmileIcon />
        <VStack alignItems={"flex-start"} maxW={"716px"} spacing={2}>
          <Heading
            alignSelf={"stretch"}
            as="h1"
            fontSize={{ base: 42, md: 56, "2xl": 61 }}
            textAlign={{ base: "left", md: "center", xl: "left" }}
          >
            Hello, I&apos;m Edo Michael 👨🏾‍💻 A{" "}
            <Text as="span" position={"relative"}>
              product{" "}
              <Box
                as={"span"}
                bg={"primary.100"}
                h={{ base: "20px", lg: "33px" }}
                left={0}
                position={"absolute"}
                top={{ base: "30px", md: "40px", lg: "44px" }}
                w={`calc(100% + 10px)`}
                zIndex={-1}
              />
            </Text>
            <Text as="span" position={"relative"}>
              designer
              <Box
                as={"span"}
                bg={"primary.100"}
                h={{ base: "20px", lg: "33px" }}
                left={{ base: 0 }}
                position={"absolute"}
                top={{ base: "30px", md: "40px", lg: "44px" }}
                w={"100%"}
                zIndex={-1}
              />
            </Text>{" "}
            transforming problems into user-friendly and attainable solutions
            for all.
          </Heading>
        </VStack>
      </VStack>

      <Stack
        alignItems={"flex-start"}
        flexDir={{ base: "column", sm: "row" }}
        spacing={{ base: 10, sm: 3, md: 10 }}
      >
        <Button
          variant={"secondary"}
          w={{ base: "300px", sm: "80%", md: "auto" }}
        >
          View resume
        </Button>
        <Button w={{ base: "300px", sm: "80%", md: "auto" }}>Hire me</Button>
      </Stack>
    </VStack>
  );
};

export default HeroText;
