import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const TestimonialCard: NextPage = () => {
  return (
    <VStack
      w={{ base: "323px", md: "645.3px" }}
      p={{ base: 5, md: 10 }}
      alignItems={"flex-start"}
      spacing={{ base: "17px", md: "35px" }}
      border={{ base: "2px solid #000", md: "4px solid #000" }}
      borderRadius={"2px"}
      shadow={{ base: "testimonialMobile", md: "testimonial" }}
      bg={"white"}
    >
      <Heading
        as={"h5"}
        fontSize={{ base: 15, md: 28 }}
        fontWeight={"medium"}
        alignSelf={"stretch"}
        color={"darkGray.200"}
      >
        “Design is a bridge that connects everyone and everything”
      </Heading>

      <HStack spacing={{ base: 3, md: 5 }} alignSelf={"stretch"}>
        <Box
          width={{ base: 46, md: 92 }}
          height={{ base: 46, md: 92 }}
          borderRadius={"92px"}
          border={{ base: "1.5px solid black", md: "3px solid black" }}
          overflow={"hidden"}
        >
          <Image
            src={"https://picsum.photos/100/100"}
            alt={"client"}
            width={92}
            height={92}
          />
        </Box>

        <VStack
          spacing={{ base: 1, md: 3 }}
          flex={"1 0 0"}
          alignItems={"flex-start"}
        >
          <Heading
            as={"h5"}
            fontSize={{ base: 15, md: 28 }}
            fontWeight={"semibold"}
          >
            Client Name
          </Heading>
          <Text
            fontSize={{ base: 12, md: 25 }}
            fontWeight={"medium"}
            alignSelf={"stretch"}
            color={"#545454"}
          >
            UX Designer, Company Name
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default TestimonialCard;
