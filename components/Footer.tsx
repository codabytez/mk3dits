import React from "react";
import { Box, HStack, Link as ChakraLink, Text, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/mk_logo.svg";

const Footer: NextPage = () => {
  return (
    <Box
      as={"footer"}
      borderTop={"6px solid #000"}
      h={{ lg: "100px" }}
      mt={{ base: "100px", lg: "190px" }}
      py={10}
      w={"full"}
    >
      <Stack
        alignItems={{ base: "center", lg: "flex-start" }}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        maxW={"1312px"}
        mx={"auto"}
        px={{ base: 5, xl: 0 }}
        spacing={{ base: 6, lg: 0 }}
        w={"full"}
      >
        <Image alt={"logo"} src={logo} />

        <Text
          color={"darkLine"}
          fontSize={{ base: 20, lg: 25, xl: 32 }}
          textAlign={"center"}
        >
          © {new Date().getFullYear()} cooked by{" "}
          <ChakraLink
            _hover={{
              color: "orange.200",
            }}
            as={Link}
            fontWeight={"bold"}
            href={"/"}
          >
            MK.
          </ChakraLink>
        </Text>

        <HStack spacing={10}>
          <ChakraLink as={Link} href={"https://dribbble.com/mk3dits"}>
            <Box
              as={"svg"}
              className="dribble-icon"
              fill="none"
              height={{ base: "30px", lg: "49px" }}
              stroke="black"
              _hover={{ stroke: "orange.200" }}
              viewBox="0 0 48 49"
              width={{ base: "30px", lg: "48px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon-park-outline:dribble">
                <g id="Group">
                  <path
                    d="M44 24.5C44.0034 27.1343 43.4847 29.7432 42.4739 32.1759C41.4631 34.6085 39.9803 36.8168 38.111 38.673C36.2571 40.5237 34.0566 41.9909 31.6354 42.9907C29.2141 43.9905 26.6196 44.5034 24 44.5C12.954 44.5 4.00002 35.546 4.00002 24.5C3.99303 19.3718 5.96289 14.4382 9.50002 10.725C11.3664 8.75562 13.6149 7.18776 16.1081 6.1174C18.6014 5.04704 21.2868 4.49668 24 4.50002C26.6196 4.49662 29.2141 5.0095 31.6354 6.00933C34.0566 7.00916 36.2571 8.47634 38.111 10.327C39.9803 12.1832 41.4631 14.3915 42.4739 16.8242C43.4847 19.2568 44.0034 21.8657 44 24.5Z"
                    id="Vector"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    d="M44.0003 24.5C41.0823 24.5 33.0323 23.4 25.8273 26.563C18.0003 30 12.3333 35.332 9.86328 38.647"
                    id="Vector_2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    d="M16.5 5.9541C19.63 8.8431 26.46 16.1981 29 23.5001C31.54 30.8021 32.48 39.7801 33.06 42.3351"
                    id="Vector_3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    d="M4.1543 22.0002C7.9323 22.2282 17.9333 22.4332 24.3333 19.7002C30.7333 16.9672 36.2403 11.9402 38.1293 10.3452M5.5003 32.1132C7.26261 36.3791 10.441 39.9075 14.5003 42.1042"
                    id="Vector_4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    d="M4.00002 24.5C3.99303 19.3718 5.96289 14.4382 9.50002 10.725C11.3664 8.75561 13.6149 7.18776 16.1081 6.1174C18.6014 5.04704 21.2868 4.49668 24 4.50002M32 6.16402C34.2776 7.16055 36.3499 8.57225 38.111 10.327C39.9803 12.1832 41.4631 14.3915 42.4739 16.8242C43.4847 19.2568 44.0034 21.8657 44 24.5C44 26.962 43.555 29.321 42.74 31.5M24 44.5C26.6196 44.5034 29.2141 43.9905 31.6354 42.9907C34.0566 41.9909 36.2571 40.5237 38.111 38.673"
                    id="Vector_5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </g>
              </g>
            </Box>
          </ChakraLink>
          <ChakraLink
            as={Link}
            href={"https://www.linkedin.com/in/michael-edo-b38414220/"}
          >
            <Box
              as={"svg"}
              className="footer-icon"
              fill="black"
              _hover={{ fill: "orange.200" }}
              height={{ base: "30px", lg: "49px" }}
              viewBox="0 0 48 49"
              width={{ base: "30px", lg: "48px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_342_3207)" id="Linkedin">
                <path
                  d="M34.794 48.1571H13.2078C9.79712 48.1534 6.52722 46.797 4.11554 44.3853C1.70386 41.9736 0.34738 38.7037 0.34375 35.2931V13.7068C0.34738 10.2961 1.70386 7.02624 4.11554 4.61456C6.52722 2.20288 9.79712 0.846404 13.2078 0.842773H34.794C38.2047 0.846404 41.4746 2.20288 43.8862 4.61456C46.2979 7.02624 47.6544 10.2961 47.658 13.7068V35.2931C47.6544 38.7037 46.2979 41.9736 43.8862 44.3853C41.4746 46.797 38.2047 48.1534 34.794 48.1571ZM13.2078 4.27134C10.7064 4.27497 8.3086 5.27022 6.5399 7.03892C4.7712 8.80762 3.77595 11.2055 3.77232 13.7068V35.2931C3.77595 37.7944 4.7712 40.1922 6.5399 41.9609C8.3086 43.7296 10.7064 44.7249 13.2078 44.7285H34.794C37.2954 44.7249 39.6932 43.7296 41.4619 41.9609C43.2306 40.1922 44.2258 37.7944 44.2295 35.2931V13.7068C44.2258 11.2055 43.2306 8.80762 41.4619 7.03892C39.6932 5.27022 37.2954 4.27497 34.794 4.27134H13.2078Z"
                  id="Vector"
                />
                <path
                  d="M14.3452 20.8245H14.3315C13.0363 20.8245 11.9863 21.8744 11.9863 23.1696V33.5102C11.9863 34.8054 13.0363 35.8553 14.3315 35.8553H14.3452C15.6404 35.8553 16.6903 34.8054 16.6903 33.5102V23.1696C16.6903 21.8744 15.6404 20.8245 14.3452 20.8245Z"
                  id="Vector_2"
                />
                <path
                  d="M14.3452 13.1446C13.8775 13.1419 13.4196 13.2782 13.0295 13.5364C12.6395 13.7945 12.3351 14.1628 12.1548 14.5944C11.9746 15.026 11.9267 15.5014 12.0173 15.9602C12.1079 16.4191 12.3328 16.8406 12.6636 17.1714C12.9943 17.5021 13.4158 17.727 13.8747 17.8176C14.3335 17.9082 14.8089 17.8603 15.2405 17.6801C15.6721 17.4998 16.0404 17.1954 16.2985 16.8054C16.5567 16.4154 16.693 15.9574 16.6903 15.4897C16.6867 14.8689 16.4385 14.2744 15.9995 13.8354C15.5605 13.3964 14.966 13.1482 14.3452 13.1446ZM27.4286 24.0337C27.8858 23.9051 28.3671 23.8878 28.8324 23.9833C29.2976 24.0787 29.7333 24.2841 30.1029 24.5823C30.5338 25.0877 30.858 25.6751 31.056 26.3091C31.254 26.9431 31.3217 27.6106 31.2549 28.2714V33.5103C31.2585 34.1335 31.5086 34.73 31.9506 35.1694C32.3926 35.6088 32.9905 35.8554 33.6138 35.8554C34.2357 35.8554 34.8322 35.6084 35.272 35.1686C35.7118 34.7288 35.9589 34.1323 35.9589 33.5103V26.6531C35.9505 25.2033 35.5526 23.7823 34.8069 22.5389L34.7383 22.4566C34.2161 21.7998 33.5501 21.2716 32.7916 20.9125C32.0332 20.5535 31.2025 20.3733 30.3635 20.3857C29.435 20.3191 28.5054 20.4997 27.6694 20.9092C26.8335 21.3188 26.121 21.9426 25.6046 22.7171L24.9738 23.636V23.0874C24.9738 22.4655 24.7267 21.869 24.2869 21.4292C23.8471 20.9894 23.2506 20.7423 22.6286 20.7423C22.0066 20.7423 21.4102 20.9894 20.9704 21.4292C20.5306 21.869 20.2835 22.4655 20.2835 23.0874V33.428C20.2835 34.05 20.5306 34.6465 20.9704 35.0863C21.4102 35.5261 22.0066 35.7731 22.6286 35.7731C22.9371 35.775 23.2429 35.7155 23.5282 35.5983C23.8136 35.4811 24.0728 35.3085 24.2909 35.0903C24.5091 34.8722 24.6817 34.6129 24.799 34.3276C24.9162 34.0422 24.9756 33.7365 24.9738 33.428V26.5571C25.8926 24.2257 27.4286 24.0474 27.4286 24.0337Z"
                  id="Vector_3"
                />
              </g>
              <defs>
                <clipPath id="clip0_342_3207">
                  <rect
                    fill="white"
                    height="48"
                    transform="translate(0 0.5)"
                    width="48"
                  />
                </clipPath>
              </defs>
            </Box>
          </ChakraLink>
          <ChakraLink as={Link} href={"https://www.instagram.com/mk3dits_/"}>
            <Box
              as={"svg"}
              className="footer-icon"
              fill="black"
              _hover={{ fill: "orange.200" }}
              height={{ base: "30px", lg: "49px" }}
              viewBox="0 0 48 49"
              width={{ base: "30px", lg: "48px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri:instagram-line">
                <path
                  d="M24.002 18.5C22.4107 18.5 20.8846 19.1321 19.7594 20.2574C18.6341 21.3826 18.002 22.9087 18.002 24.5C18.002 26.0913 18.6341 27.6174 19.7594 28.7426C20.8846 29.8679 22.4107 30.5 24.002 30.5C25.5933 30.5 27.1194 29.8679 28.2446 28.7426C29.3699 27.6174 30.002 26.0913 30.002 24.5C30.002 22.9087 29.3699 21.3826 28.2446 20.2574C27.1194 19.1321 25.5933 18.5 24.002 18.5ZM24.002 14.5C26.6542 14.5 29.1977 15.5536 31.0731 17.4289C32.9484 19.3043 34.002 21.8478 34.002 24.5C34.002 27.1522 32.9484 29.6957 31.0731 31.5711C29.1977 33.4464 26.6542 34.5 24.002 34.5C21.3498 34.5 18.8063 33.4464 16.9309 31.5711C15.0556 29.6957 14.002 27.1522 14.002 24.5C14.002 21.8478 15.0556 19.3043 16.9309 17.4289C18.8063 15.5536 21.3498 14.5 24.002 14.5ZM37.002 14C37.002 14.663 36.7386 15.2989 36.2698 15.7678C35.8009 16.2366 35.165 16.5 34.502 16.5C33.839 16.5 33.2031 16.2366 32.7342 15.7678C32.2654 15.2989 32.002 14.663 32.002 14C32.002 13.337 32.2654 12.7011 32.7342 12.2322C33.2031 11.7634 33.839 11.5 34.502 11.5C35.165 11.5 35.8009 11.7634 36.2698 12.2322C36.7386 12.7011 37.002 13.337 37.002 14ZM24.002 8.5C19.054 8.5 18.246 8.514 15.944 8.616C14.376 8.69 13.324 8.9 12.348 9.28C11.5312 9.57988 10.7928 10.0605 10.188 10.686C9.56201 11.2908 9.08071 12.0292 8.78 12.846C8.4 13.826 8.19 14.876 8.118 16.442C8.014 18.65 8 19.422 8 24.5C8 29.45 8.014 30.256 8.116 32.558C8.19 34.124 8.4 35.178 8.778 36.152C9.118 37.022 9.518 37.648 10.182 38.312C10.856 38.984 11.482 39.386 12.342 39.718C13.33 40.1 14.382 40.312 15.942 40.384C18.15 40.488 18.922 40.5 24 40.5C28.95 40.5 29.756 40.486 32.058 40.384C33.622 40.31 34.674 40.1 35.652 39.722C36.468 39.4206 37.2061 38.9402 37.812 38.316C38.486 37.644 38.888 37.018 39.22 36.156C39.6 35.172 39.812 34.12 39.884 32.556C39.988 30.35 40 29.576 40 24.5C40 19.552 39.986 18.744 39.884 16.442C39.81 14.878 39.598 13.822 39.22 12.846C38.9185 12.03 38.4381 11.292 37.814 10.686C37.2095 10.0597 36.471 9.57833 35.654 9.278C34.674 8.898 33.622 8.688 32.058 8.616C29.852 8.512 29.08 8.5 24 8.5M24 4.5C29.434 4.5 30.112 4.52 32.246 4.62C34.374 4.72 35.826 5.054 37.1 5.55C38.42 6.058 39.532 6.746 40.644 7.856C41.661 8.85579 42.4479 10.0652 42.95 11.4C43.444 12.674 43.78 14.126 43.88 16.256C43.974 18.388 44 19.066 44 24.5C44 29.934 43.98 30.612 43.88 32.744C43.78 34.874 43.444 36.324 42.95 37.6C42.4493 38.9355 41.6622 40.1452 40.644 41.144C39.6439 42.1606 38.4346 42.9475 37.1 43.45C35.826 43.944 34.374 44.28 32.246 44.38C30.112 44.474 29.434 44.5 24 44.5C18.566 44.5 17.888 44.48 15.754 44.38C13.626 44.28 12.176 43.944 10.9 43.45C9.56465 42.9489 8.35505 42.1619 7.356 41.144C6.33886 40.1443 5.55192 38.9349 5.05 37.6C4.554 36.326 4.22 34.874 4.12 32.744C4.024 30.612 4 29.934 4 24.5C4 19.066 4.02 18.388 4.12 16.256C4.22 14.126 4.554 12.676 5.05 11.4C5.55047 10.0644 6.33761 8.85464 7.356 7.856C8.35534 6.83846 9.56486 6.05146 10.9 5.55C12.174 5.054 13.624 4.72 15.754 4.62C17.89 4.526 18.568 4.5 24.002 4.5"
                  id="Vector"
                />
              </g>
            </Box>
          </ChakraLink>
          <ChakraLink as={Link} href={"https://x.com/mk3dits"}>
            <Box
              as={"svg"}
              className="footer-icon"
              fill="black"
              _hover={{ fill: "orange.200" }}
              height={{ base: "30px", lg: "49px" }}
              viewBox="0 0 48 49"
              width={{ base: "30px", lg: "48px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1465 18.7891L16.524 4.36129L16.4498 4.25H16.316H5H4.53271L4.79203 4.63874L19.5243 26.7232L4.80814 44.3397L4.46541 44.75H5H8.352H8.46892L8.54387 44.6603L21.3016 29.3868L31.476 44.6387L31.5503 44.75H31.684H43H43.4673L43.208 44.3613L27.9277 21.4548L41.9519 4.66024L42.2945 4.25H41.76H38.408H38.2911L38.2161 4.33973L26.1465 18.7891ZM23.2309 26.7936L23.2308 26.7935L21.7269 24.5796L21.7268 24.5795L10.0318 7.35H14.5775L24.1551 21.4604L24.1551 21.4604L25.6571 23.6744L25.6571 23.6744L37.9382 41.768H33.3945L23.2309 26.7936Z"
                strokeWidth="0.5"
              />
            </Box>
          </ChakraLink>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
