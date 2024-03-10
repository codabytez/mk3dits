import React from "react";
import { NextPage } from "next";
import { VStack, HStack, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import smileFace from "@/public/assets/smileFace.svg";
import UiCard from "./uiCard";

const UiScreen: NextPage = () => {
  return (
    <VStack
      spacing={16}
      alignItems={"flex-start"}
      maxW={"1090px"}
      w={"full"}
      pb={"150px"}
    >
      <VStack spacing={10} alignItems={"flex-start"}>
        <Heading
          as={"h4"}
          color={"#030303"}
          fontSize={48}
          fontWeight={500}
          lineHeight={"56px"}
          display={"flex"}
          gap={3}
        >
          Ui screens{" "}
          <Image
            alt={"smile face"}
            src={smileFace}
            style={{
              transform: "rotate(-18deg)",
            }}
          />
        </Heading>

        <Text color={"#2F2E2E"} fontSize={20}>
          By addressing these solutions, the mobile application aims to
          revolutionize the cooking experience, making it more accessible,
          enjoyable, and resourceful for users searching for recipes based on
          available ingredients.
        </Text>
      </VStack>

      <VStack alignItems={"flex-start"} spacing={"197px"}>
        <HStack alignItems={"flex-start"} spacing={6} position={"relative"}>
          <VStack pos={"absolute"} right={"-151px"} bottom={"-157px"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1154"
              height="1168"
              viewBox="0 0 1154 1168"
              fill="none"
            >
              <path
                d="M1.52273e-05 981.096C1.38916e-05 997.841 12.4748 1011.96 29.0916 1014.03L1262.72 1167.37C1282.52 1169.83 1300 1154.39 1300 1134.43L1300 186.903C1300 170.158 1287.53 156.037 1270.91 153.971L37.2784 0.633671C17.4793 -1.82739 9.23976e-05 13.6136 9.08062e-05 33.5652L1.52273e-05 981.096Z"
                fill="#847603"
                fillOpacity="0.1"
              />
            </svg>
          </VStack>
          <Box pt={0}>
            <UiCard />
          </Box>
          <Box pt={"67px"}>
            <UiCard />
          </Box>

          <Box pt={"133px"}>
            <UiCard />
          </Box>
        </HStack>

        <HStack alignItems={"flex-start"} spacing={6} pos={"relative"}>
          <VStack pos={"absolute"} left={"-151px"} bottom={"-157px"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1154"
              height="1168"
              viewBox="0 0 1154 1168"
              fill="none"
            >
              <path
                d="M1154 980.898C1154 997.756 1141.44 1011.97 1124.71 1014.05L-108.47 1167.33C-128.403 1169.81 -146 1154.27 -146 1134.18L-146 187.101C-146 170.243 -133.441 156.026 -116.712 153.947L1116.47 0.664913C1136.4 -1.81275 1154 13.7327 1154 33.8191L1154 980.898Z"
                fill="#847603"
                fillOpacity="0.1"
              />
            </svg>
          </VStack>
          <Box pt={"133px"}>
            <UiCard />
          </Box>

          <Box pt={"67px"}>
            <UiCard />
          </Box>

          <Box>
            <UiCard />
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default UiScreen;
