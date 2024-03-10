import React from "react";
import { NextPage } from "next";
import { VStack, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

const UiCard: NextPage = () => {
  return (
    <VStack alignItems={"flex-start"} spacing={8} flex={"1 0 0"} maxW={"350px"}>
      <VStack
        alignItems={"flex-start"}
        w={"338px"}
        h={"733px"}
        border={"1px solid black"}
        overflow={"hidden"}
      >
        <Image
          alt={"mushImage"}
          src={"https://picsum.photos/340/800?grayscale"}
          width={338}
          height={733}
        />
      </VStack>
      <VStack p={5} alignItems={"flex-start"} spacing={5} alignSelf={"stretch"}>
        <HStack spacing={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
          >
            <path
              d="M11.6484 26.9248C12.408 27.7734 13.5118 28.3075 14.7403 28.3075H23.0366C25.3276 28.3075 27.1847 26.4504 27.1847 24.1594V13.0977C27.1847 11.8692 26.6505 10.7654 25.802 10.0059V24.1594C25.802 25.6867 24.5639 26.9248 23.0366 26.9248H11.6484Z"
              fill="#030303"
            />
            <path
              d="M7.82422 8.94974C7.82422 7.42244 9.06234 6.18433 10.5896 6.18433H21.6513C23.1786 6.18433 24.4167 7.42244 24.4167 8.94974V22.7768C24.4167 24.3041 23.1786 25.5422 21.6513 25.5422H10.5896C9.06234 25.5422 7.82422 24.3041 7.82422 22.7768V8.94974Z"
              fill="#030303"
            />
          </svg>

          <Text
            color={"#030303"}
            fontFamily={"inter"}
            fontSize={20}
            fontWeight={600}
          >
            Splash screen
          </Text>
        </HStack>

        <HStack
          pl={"46px"}
          alignItems={"flex-start"}
          spacing={2}
          alignSelf={"stretch"}
        >
          <Text color={"#2F2E2E"} fontFamily={"inter"} fontSize={13}>
            Mr.Fungi splash screen is a tantalizing teaser, blending visuals and
            brand elements to captivate users. It sets the stage for a seamless
            onboarding experience, creating anticipation for the delightful
            culinary journey ahead.
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default UiCard;
