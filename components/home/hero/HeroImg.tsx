import { NextPage } from "next";
import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import heroImg from "@/public/assets/heroimg.png";
// import HeroSmileImageRound from "@/public/assets/HeroSmileImageRound.svg";
import handIcon from "@/public/assets/hand.svg";
import smileFace from "@/public/assets/smileFace.svg";
import heroFlower from "@/public/assets/heroFlower.svg";
import Image from "next/image";
import HeroSmileImageRound from "./HeroSmileImageRound";
import HeroImgBox from "./HeroImgBox";
import ClickMeText from "./ClickMeText";

const HeroImg: NextPage = () => {
  return (
    <VStack
      w={{ base: "335px", md: "520px" }}
      h={{ base: "330px", md: "512px" }}
      shadow={{ base: "heroImgMobile", md: "heroImg" }}
      bg={"white"}
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={1}
      mt={{ base: 20, md: "130px", lg: "200px" }}
    >
      <ClickMeText />

      <Box position={"absolute"} zIndex={2} top={"85px"} left={"-30px"}>
        <HeroSmileImageRound />
      </Box>

      <HStack
        width={`calc(100% - 14px)`}
        h={`calc(100% - 16px)`}
        bg={"white"}
        justifyContent={"center"}
        position={"relative"}
        zIndex={1}
      >
        {/* NOTE: This is the hanger like thing on the top of the hero image */}
        <HStack position={"absolute"} zIndex={1} top={0}>
          <HStack position={"relative"} zIndex={1}>
            <Box
              as={"svg"}
              position={"absolute"}
              top={{ base: "4px", lg: "12px" }}
              left={"-48px"}
              xmlns="http://www.w3.org/2000/svg"
              width={{ base: "13px", lg: "22px" }}
              height={{ base: "13px", lg: "21px" }}
              viewBox="0 0 22 21"
              fill="none"
            >
              <ellipse
                cx="11.0312"
                cy="10.5684"
                rx="10.1562"
                ry="10"
                fill="black"
              />
            </Box>
            <Box
              as={"svg"}
              position={"absolute"}
              top={{ base: "-10px", lg: "12px" }}
              left={{ base: "-45px", lg: "-48px" }}
              xmlns="http://www.w3.org/2000/svg"
              width={{ base: "62.5px", lg: "96px" }}
              height={{ base: "43px", lg: "16px" }}
              viewBox="0 0 120 16"
              fill="none"
            >
              <path
                d="M119 5.82441C119 5.82441 108.104 3.49869 95.3684 3.95014C74.8134 4.67874 54.2138 12.1398 33.5836 12.2903C19.98 12.3895 0.999888 10.2743 0.999888 10.2743"
                stroke="black"
                stroke-width="7"
              />
            </Box>

            <Box
              as={"svg"}
              position={"absolute"}
              top={{ base: "3px", lg: "8px" }}
              left={{ base: "10px", lg: "40px" }}
              xmlns="http://www.w3.org/2000/svg"
              width={{ base: "13px", lg: "22px" }}
              height={{ base: "13px", lg: "21px" }}
              viewBox="0 0 22 21"
              fill="none"
            >
              <ellipse
                cx="10.9531"
                cy="10.5684"
                rx="10.1562"
                ry="10"
                fill="black"
              />
            </Box>
          </HStack>
        </HStack>

        <Box
          position={"absolute"}
          zIndex={2}
          top={0}
          right={0}
          width={{ base: "73.5px", md: "101" }}
          height={{ base: "53.5px", md: "95px" }}
        >
          <Box
            as={Image}
            src={handIcon}
            alt="Hand Icon"
            position={"absolute"}
            zIndex={2}
            top={{ base: "16px", md: "33px" }}
            right={{ base: "40px", md: "70px" }}
            width={{ base: "21px", md: "32.5px" }}
            height={{ base: "12px", md: "19px" }}
          />

          <Box
            as={Image}
            src={handIcon}
            alt="Hand Icon"
            transform={"rotate(92deg)"}
            position={"absolute"}
            zIndex={2}
            top={{ base: "40px", md: "70px" }}
            right={{ base: "16px", md: "30px" }}
            width={{ base: "21px", md: "32.5px" }}
            height={{ base: "12px", md: "19px" }}
          />

          <Box
            as={Image}
            src={smileFace}
            alt="Smile Face"
            transform={"rotate(24deg)"}
            position={"absolute"}
            zIndex={2}
            top={"0px"}
            right={"0px"}
            width={{ base: "33px", md: "51px" }}
            height={{ base: "24.5px", md: "38px" }}
          />
        </Box>
        <Box
          as={Image}
          width={{ base: "273.5px", md: "424px" }}
          height={{ base: "273.5px", md: "424px" }}
          src={heroImg}
          alt="Hero Image"
        />

        <Box
          as={Image}
          src={heroFlower}
          alt="Hero Flower"
          position={"absolute"}
          zIndex={2}
          bottom={"-10px"}
          right={"-10px"}
          width={{ base: "99px", md: "152px" }}
          height={{ base: "82px", md: "128px" }}
        />
      </HStack>

      <HeroImgBox />
    </VStack>
  );
};

export default HeroImg;
