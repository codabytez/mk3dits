import { NextPage } from "next";
import { VStack, Box, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import testimonialNew from "@/public/assets/testimonialNew.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonials: NextPage = () => {
  return (
    <VStack
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      my={{ base: 5, lg: 20 }}
      w={"full"}
    >
      <VStack
        alignItems={"flex-start"}
        position={"relative"}
        spacing={20}
        maxW={"1327px"}
        mx={"auto"}
        w={"full"}
        px={{ base: 5 }}
      >
        <HStack spacing={9} w={{ base: "300px", md: "720px" }} pos={"relative"}>
          <Heading
            as={"h3"}
            fontSize={{ base: 24, md: 48 }}
            fontWeight={"medium"}
            mb={8}
          >
            Here’s what my clients are saying about my work
          </Heading>

          <Box
            as={Image}
            src={testimonialNew}
            alt={"smile face"}
            position={"absolute"}
            right={-5}
            bottom={{ base: 0, md: "auto" }}
            w={{ base: "31px", md: "60px" }}
            h={{ base: "32px", md: "62px" }}
          />
        </HStack>

        <Box
          w={{ base: "329px", md: "700px", xl: "full" }}
          h={{ base: "637px", md: "1240px", xl: "814px" }}
          mx={"auto"}
          position={"relative"}
        >
          <Box
            transform={"rotate(2deg)"}
            position={"absolute"}
            top={{ base: "7px", md: "58px", xl: "33px" }}
            left={{ base: 0, xl: "5px" }}
          >
            <TestimonialCard />
          </Box>
          <Box
            transform={"rotate(-2.397deg)"}
            position={"absolute"}
            right={{ base: "0", xl: "35px" }}
            top={{ base: "160px", md: "347px", xl: "153px" }}
          >
            <TestimonialCard />
          </Box>
          <Box
            transform={"rotate(2deg)"}
            position={"absolute"}
            bottom={{ base: "172px", md: "303px", xl: "122px" }}
            left={{ base: 0, xl: "15px" }}
            zIndex={1}
          >
            <TestimonialCard />
          </Box>
          <Box
            transform={{ base: "rotate(3.88deg)", xl: "rotate(2deg)" }}
            position={"absolute"}
            right={0}
            bottom={{ base: "20px", xl: "5px" }}
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
