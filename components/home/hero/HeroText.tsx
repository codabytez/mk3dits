import { NextPage } from "next";
import { VStack, HStack, Heading, Text, Box, Stack } from "@chakra-ui/react";
import Button from "@/components/Button";
import HeroSmileIcon from "./HeroSmileIcon";

const HeroText: NextPage = () => {
  return (
    <VStack
      maxW={"716px"}
      spacing={{ base: 8 }}
      alignItems={{ base: "flex-start", md: "center", xl: "flex-start" }}
      justifyContent={{ base: "flex-start", md: "center", xl: "flex-start" }}
    >
      <VStack
        alignItems={{ base: "flex-start", md: "center", xl: "flex-start" }}
        justifyContent={{ base: "flex-start", md: "center", xl: "flex-start" }}
        gap={8}
      >
        <HeroSmileIcon />
        <VStack alignItems={"flex-start"} maxW={"716px"} spacing={2}>
          <Heading
            as="h1"
            fontSize={{ base: 42, md: 56, "2xl": 61 }}
            alignSelf={"stretch"}
            textAlign={{ base: "left", md: "center", xl: "left" }}
          >
            Hello, I'm Edo Michael 👨🏾‍💻 A{" "}
            <Text as="span" position={"relative"}>
              product{" "}
              <Box
                as={"span"}
                position={"absolute"}
                w={`calc(100% + 10px)`}
                h={{ base: "20px", lg: "33px" }}
                left={0}
                top={{ base: "30px", lg: "44px" }}
                zIndex={-1}
                bg={"primary.100"}
              />
            </Text>
            <Text as="span" position={"relative"}>
              designer
              <Box
                as={"span"}
                position={"absolute"}
                w={"100%"}
                h={{ base: "20px", lg: "33px" }}
                left={{ base: 0 }}
                top={{ base: "30px", lg: "44px" }}
                zIndex={-1}
                bg={"primary.100"}
              />
            </Text>{" "}
            transforming problems into user-friendly and attainable solutions
            for all.
          </Heading>
        </VStack>
      </VStack>

      <Stack
        flexDir={{ base: "column", sm: "row" }}
        spacing={{ base: 10, sm: 3, md: 10 }}
        alignItems={"flex-start"}
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
