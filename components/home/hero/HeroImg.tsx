"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { VStack, HStack, Box } from "@chakra-ui/react";
import heroImg from "@/public/assets/heroimg.png";
import handIcon from "@/public/assets/hand.svg";
import smileFace from "@/public/assets/smileFace.svg";
import heroFlower from "@/public/assets/heroFlower.svg";
import Image from "next/image";
import HeroSmileImageRound from "./HeroSmileImageRound";
import HeroImgBox from "./HeroImgBox";
import ClickMeText from "./ClickMeText";
import mk3dits from "@/public/assets/mk3dits.png";

const HeroImg: NextPage = () => {
  const [showImg, setShowImg] = useState(false);

  return (
    <VStack
      alignItems={"center"}
      bg={"white"}
      h={{ base: "330px", md: "512px" }}
      justifyContent={"center"}
      mt={{ base: 20, md: "130px", lg: "200px" }}
      position={"relative"}
      shadow={{ base: "heroImgMobile", md: "heroImg" }}
      w={{ base: "335px", md: "520px" }}
      zIndex={1}
    >
      <ClickMeText />

      <Box left={"-30px"} position={"absolute"} top={"85px"} zIndex={2}>
        <HeroSmileImageRound />
      </Box>

      <HStack
        bg={"white"}
        h={`calc(100% - 16px)`}
        justifyContent={"center"}
        position={"relative"}
        width={`calc(100% - 14px)`}
        zIndex={1}
      >
        {/* NOTE: This is the hanger like thing on the top of the hero image */}
        <HStack position={"absolute"} top={0} zIndex={1}>
          <HStack position={"relative"} zIndex={1}>
            <Box
              as={"svg"}
              fill="none"
              height={{ base: "13px", lg: "21px" }}
              left={"-48px"}
              position={"absolute"}
              top={{ base: "4px", lg: "12px" }}
              viewBox="0 0 22 21"
              width={{ base: "13px", lg: "22px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="11.0312"
                cy="10.5684"
                fill="black"
                rx="10.1562"
                ry="10"
              />
            </Box>
            <Box
              as={"svg"}
              fill="none"
              height={{ base: "43px", lg: "16px" }}
              left={{ base: "-45px", lg: "-48px" }}
              position={"absolute"}
              top={{ base: "-10px", lg: "12px" }}
              viewBox="0 0 120 16"
              width={{ base: "62.5px", lg: "96px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M119 5.82441C119 5.82441 108.104 3.49869 95.3684 3.95014C74.8134 4.67874 54.2138 12.1398 33.5836 12.2903C19.98 12.3895 0.999888 10.2743 0.999888 10.2743"
                stroke="black"
                strokeWidth="7"
              />
            </Box>

            <Box
              as={"svg"}
              fill="none"
              height={{ base: "13px", lg: "21px" }}
              left={{ base: "10px", lg: "40px" }}
              position={"absolute"}
              top={{ base: "3px", lg: "8px" }}
              viewBox="0 0 22 21"
              width={{ base: "13px", lg: "22px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="10.9531"
                cy="10.5684"
                fill="black"
                rx="10.1562"
                ry="10"
              />
            </Box>
          </HStack>
        </HStack>

        <Box
          height={{ base: "53.5px", md: "95px" }}
          position={"absolute"}
          right={0}
          top={0}
          width={{ base: "73.5px", md: "101px" }}
          zIndex={2}
          cursor={"pointer"}
          onClick={() => setShowImg(!showImg)}
        >
          <Box
            alt="Hand Icon"
            as={Image}
            height={{ base: "12px", md: "19px" }}
            position={"absolute"}
            right={{ base: "40px", md: "70px" }}
            src={handIcon}
            top={{ base: "16px", md: "33px" }}
            width={{ base: "21px", md: "32.5px" }}
            zIndex={2}
          />

          <Box
            height={{ base: "12px", md: "19px" }}
            position={"absolute"}
            width={{ base: "21px", md: "32.5px" }}
            zIndex={2}
            top={{ base: "40px", md: "70px" }}
            right={{
              base: showImg ? "10px" : "16px",
              md: showImg ? "18px" : "30px",
              xl: showImg ? "10px" : "20px",
            }}
            transition={"all 1.5s ease-in-out"}
            transform={showImg ? "scaleX(-1)" : "scaleX(1)"}
          >
            <Box
              alt="Hand Icon"
              as={Image}
              height={{ base: "12px", md: "19px" }}
              src={handIcon}
              width={{ base: "21px", md: "32.5px" }}
              zIndex={2}
              transform={"rotate(92deg)"}
            />
          </Box>

          <Box
            alt="Smile Face"
            as={Image}
            height={{ base: "24.5px", md: "38px" }}
            position={"absolute"}
            right={"0px"}
            src={smileFace}
            top={"0px"}
            transform={"rotate(24deg)"}
            width={{ base: "33px", md: "51px" }}
            zIndex={2}
          />
        </Box>
        <Box
          height={{ base: "273.5px", md: "424px" }}
          overflow={"hidden"}
          position={"relative"}
          width={{ base: "273.5px", md: "424px" }}
        >
          <Box
            alt="Hero Image"
            as={Image}
            height={{ base: "273.5px", md: "424px" }}
            src={mk3dits}
            width={{ base: "273.5px", md: "424px" }}
            position={"absolute"}
            top={0}
            left={0}
          />

          <Box
            alt="Hero Image"
            as={Image}
            height={{ base: "273.5px", md: "424px" }}
            src={heroImg}
            transform={showImg ? "translateX(100%)" : "translateX(0)"}
            transition={"transform 1.5s ease-in-out"}
            width={{ base: "273.5px", md: "424px" }}
            position={"absolute"}
            top={0}
            left={0}
            zIndex={1}
          />
        </Box>

        <Box
          alt="Hero Flower"
          as={Image}
          bottom={"-10px"}
          height={{ base: "82px", md: "128px" }}
          position={"absolute"}
          right={"-10px"}
          src={heroFlower}
          width={{ base: "99px", md: "152px" }}
          zIndex={2}
        />
      </HStack>

      <HeroImgBox />
    </VStack>
  );
};

export default HeroImg;
