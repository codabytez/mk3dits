"use client";
import { FC } from "react";
import { HStack, Text } from "@chakra-ui/react";
import { ChakraBox } from "@/helpers/customChakra";
import { NextPage } from "next";

const skills = [
  "FIGMA",
  "Adobe photoshop",
  "inkscape",
  "adobe illustrator",
  "SPLINE",
  "USEBERRY",
  "HOTJAR",
  "GOOGLE OPTIMISE",
  "CLICKUP",
  "OPTIMAL WORKSHOP",
];

const Strap: NextPage = () => {
  const strapVariants = {
    initial: { translateX: "0%" },
    animate: {
      translateX: "-103%",
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <ChakraBox
      userSelect={"none"}
      background={"black"}
      w={"full"}
      display={"flex"}
      h={"77px"}
      variants={strapVariants}
      overflow={"hidden"}
    >
      <ChakraBox
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={"81px"}
        variants={strapVariants}
        initial="initial"
        animate="animate"
        minW={"2940px"}
        background={"black"}
      >
        {skills.map((skill, index) => (
          <HStack
            key={index}
            flexShrink={"0"}
            justifyContent={"center"}
            spacing={"80px"}
          >
            <Text textTransform={"uppercase"} color={"white"}>
              {skill}
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
            >
              <path
                d="M12.0768 0.771446L20.3083 15.6645L28.0589 0.723135L23.2809 16.8627L39.5397 11.8415L24.5511 19.7733L39.794 27.6137L23.3749 22.6913L28.6728 38.8004L20.4413 23.9074L12.6907 38.8487L17.4687 22.7092L1.20988 27.7303L16.1985 19.7985L0.955571 11.9582L17.3747 16.8805L12.0768 0.771446Z"
                fill="#FF7E21"
              />
            </svg>
          </HStack>
        ))}
      </ChakraBox>

      <ChakraBox
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexShrink={"0"}
        gap={"81px"}
        variants={strapVariants}
        initial="initial"
        animate="animate"
        minW={"2900px"}
        background={"black"}
      >
        {skills.map((skill, index) => (
          <HStack
            key={index}
            flexShrink={"0"}
            justifyContent={"center"}
            spacing={"80px"}
          >
            <Text textTransform={"uppercase"} color={"white"}>
              {skill}
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
            >
              <path
                d="M12.0768 0.771446L20.3083 15.6645L28.0589 0.723135L23.2809 16.8627L39.5397 11.8415L24.5511 19.7733L39.794 27.6137L23.3749 22.6913L28.6728 38.8004L20.4413 23.9074L12.6907 38.8487L17.4687 22.7092L1.20988 27.7303L16.1985 19.7985L0.955571 11.9582L17.3747 16.8805L12.0768 0.771446Z"
                fill="#FF7E21"
              />
            </svg>
          </HStack>
        ))}
      </ChakraBox>
    </ChakraBox>
  );
};

export default Strap;
