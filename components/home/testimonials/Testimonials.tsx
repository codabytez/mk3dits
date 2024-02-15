import React from "react";
import { NextPage } from "next";
import { VStack, Box, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import testimonialNew from "@/public/assets/testimonialNew.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonials: NextPage = () => {
  return (
    <VStack
      alignItems={"center"}
      justifyContent={"center"}
      my={{ base: 5, lg: 20 }}
      position={"relative"}
      w={"full"}
    >
      <VStack
        alignItems={"flex-start"}
        maxW={"1327px"}
        mx={"auto"}
        position={"relative"}
        px={{ base: 5 }}
        spacing={20}
        w={"full"}
      >
        <HStack pos={"relative"} spacing={9} w={{ base: "300px", md: "720px" }}>
          <Heading
            as={"h3"}
            fontSize={{ base: 24, md: 48 }}
            fontWeight={"medium"}
            mb={8}
          >
            Here’s what my clients are saying about my work
          </Heading>

          <Box
            alt={"smile face"}
            as={Image}
            bottom={{ base: 0, md: "auto" }}
            h={{ base: "32px", md: "62px" }}
            position={"absolute"}
            right={-5}
            src={testimonialNew}
            w={{ base: "31px", md: "60px" }}
          />
        </HStack>

        <Box
          h={{ base: "637px", md: "1240px", xl: "814px" }}
          mx={"auto"}
          position={"relative"}
          w={{ base: "329px", md: "700px", xl: "full" }}
        >
          <Box
            left={{ base: 0, xl: "5px" }}
            position={"absolute"}
            top={{ base: "7px", md: "58px", xl: "33px" }}
            transform={"rotate(2deg)"}
          >
            <TestimonialCard />
          </Box>
          <Box
            position={"absolute"}
            right={{ base: "0", xl: "35px" }}
            top={{ base: "160px", md: "347px", xl: "153px" }}
            transform={"rotate(-2.397deg)"}
          >
            <TestimonialCard />
          </Box>
          <Box
            bottom={{ base: "172px", md: "303px", xl: "122px" }}
            left={{ base: 0, xl: "15px" }}
            position={"absolute"}
            transform={"rotate(2deg)"}
            zIndex={1}
          >
            <TestimonialCard />
          </Box>
          <Box
            bottom={{ base: "20px", xl: "5px" }}
            position={"absolute"}
            right={0}
            transform={{ base: "rotate(3.88deg)", xl: "rotate(2deg)" }}
            zIndex={{ base: 1, "2xl": 0 }}
          >
            <TestimonialCard />
          </Box>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Testimonials;
