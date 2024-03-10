import React from "react";
import { NextPage } from "next";
import { VStack, HStack, Heading, Text } from "@chakra-ui/react";

const Colors: NextPage = () => {
  return (
    <VStack
      alignItems={"flex-start"}
      spacing={8}
      borderRadius={40}
      maxW={"1090px"}
      w={"full"}
    >
      <Heading
        as={"h4"}
        color={"#030303"}
        fontSize={48}
        fontWeight={500}
        lineHeight={"56px"}
      >
        Colors
      </Heading>

      <VStack alignItems={"flex-start"} spacing={6} alignSelf={"stretch"}>
        <VStack alignItems={"flex-start"} spacing={1}>
          <Text color={"#2F2E2E"} fontSize={32}>
            Primary
          </Text>
          <Text color={"#656565"} fontSize={20}>
            Applied frequently to highlight actions & information.
          </Text>
        </VStack>

        <HStack spacing={10}>
          {Array.from({ length: 2 }).map((_, i) => (
            <VStack
              key={i}
              h={"147px"}
              w={"147px"}
              p={"12px 10px 99px"}
              alignItems={"flex-start"}
              spacing={1}
              borderRadius={10}
              bg={"#FFCCA7"}
            >
              <Text color={"#1D2433"} fontSize={16}>
                100
              </Text>
              <Text color={"#1D2433"} fontSize={12} lineHeight={"14px"}>
                Background (FFCCA7)
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>

      <VStack alignItems={"flex-start"} spacing={6} alignSelf={"stretch"}>
        <VStack alignItems={"flex-start"} spacing={1}>
          <Text color={"#2F2E2E"} fontSize={32}>
            Error
          </Text>
          <Text color={"#656565"} fontSize={20}>
            Applied sparingly to show negative feedback/status or dangerous
            actions.
          </Text>
        </VStack>

        <HStack spacing={10}>
          {Array.from({ length: 4 }).map((_, i) => (
            <VStack
              key={i}
              h={"147px"}
              w={"147px"}
              p={"12px 10px 99px"}
              alignItems={"flex-start"}
              spacing={1}
              borderRadius={10}
              bg={"#FFCCA7"}
            >
              <Text color={"#1D2433"} fontSize={16}>
                100
              </Text>
              <Text color={"#1D2433"} fontSize={12} lineHeight={"14px"}>
                Background (FFCCA7)
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>

      <VStack alignItems={"flex-start"} spacing={6} alignSelf={"stretch"}>
        <VStack alignItems={"flex-start"} spacing={1}>
          <Text color={"#2F2E2E"} fontSize={32}>
            Text + Icon
          </Text>
          <Text color={"#656565"} fontSize={20}>
            Applied frequently to texts & icons
          </Text>
        </VStack>

        <HStack spacing={10}>
          {Array.from({ length: 6 }).map((_, i) => (
            <VStack
              key={i}
              h={"147px"}
              w={"147px"}
              p={"12px 10px 99px"}
              alignItems={"flex-start"}
              spacing={1}
              borderRadius={10}
              bg={"#FFCCA7"}
            >
              <Text color={"#1D2433"} fontSize={16}>
                100
              </Text>
              <Text color={"#1D2433"} fontSize={12} lineHeight={"14px"}>
                Background (FFCCA7)
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Colors;
