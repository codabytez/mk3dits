import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

const HeroImgBox: NextPage = () => {
  return (
    <>
      <Box
        shadow={{ base: "heroImgMobile", md: "heroImg" }}
        as={"svg"}
        position={"absolute"}
        top={{ base: "-8px", md: "-15px" }}
        left={"-2px"}
        zIndex={1}
        xmlns="http://www.w3.org/2000/svg"
        width={"9px"}
        height={{ base: "346px", md: "544px" }}
        viewBox="0 0 9 544"
        fill="none"
      >
        <path
          d="M5.23255 3.41992C5.23255 60.4725 5.84047 83.4005 5.84047 144.075M5.84047 144.075C5.84047 204.75 5.74648 315.337 5.23255 389.662C4.71862 463.988 4.31986 536.333 4.31986 536.333C4.31986 546.831 3.19572 534.442 3.27771 528.856C3.3802 521.874 4.36371 323.216 4.36371 305.874C4.36371 288.531 5.23255 200.249 5.84047 144.075Z"
          stroke="black"
          strokeWidth="6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Box>

      <Box
        as={"svg"}
        shadow={{ base: "heroImgMobile", md: "heroImg" }}
        position={"absolute"}
        top={{ base: "2px", md: 0 }}
        left={{ base: "-10px", md: "-16px" }}
        zIndex={-1}
        xmlns="http://www.w3.org/2000/svg"
        width={{ base: "352px", md: "551px" }}
        height="8px"
        viewBox="0 0 551 8"
        fill="none"
      >
        <path
          d="M3 4.28206C32.6549 4.28206 58.5282 4.28206 73.7833 4.28206M73.7833 4.28206C89.0384 4.28206 156.771 4.57357 185.45 4.57358M73.7833 4.28206C73.7833 4.28206 106.865 3.37453 126.261 3.37453C145.656 3.37453 185.45 4.57358 185.45 4.57358M548 4.57358C517.648 4.57358 531.682 4.28205 501.535 4.28205C484.35 4.28205 463.329 4.76792 433.192 4.57358M266.177 3.37453C287.034 3.40261 396.045 4.33403 433.192 4.57358M266.177 3.37453C244.607 3.34549 214.13 4.57358 185.45 4.57358M266.177 3.37453C266.177 3.37453 318.474 3.37453 347.764 3.37453M433.192 4.57358C433.192 4.57358 377.054 3.37453 347.764 3.37453M185.45 4.57358C203.029 4.57358 243.784 4.57358 266.177 4.57358C288.57 4.57358 329.899 3.77421 347.764 3.37453"
          stroke="black"
          stroke-width="6"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Box>

      <Box
        as={"svg"}
        shadow={{ base: "heroImgMobile", md: "heroImg" }}
        position={"absolute"}
        top={{ base: "-8px", md: "-15px" }}
        right={"0px"}
        zIndex={-1}
        xmlns="http://www.w3.org/2000/svg"
        width="9px"
        height={{ base: "346px", md: "543px" }}
        viewBox="0 0 9 543"
        fill="none"
      >
        <path
          d="M4.44684 270.092C4.44731 336.486 5.80028 378.26 5.80045 421.671C5.80062 465.083 5.10933 538.627 5.10933 538.627C5.10933 538.627 3.51746 541.726 3.51758 535.67C3.51769 529.614 4.55825 486.56 4.44684 424.686C4.33543 362.812 4.34034 297.976 4.44684 270.092ZM4.44684 270.092C4.44662 238.793 3.72407 174.861 3.76681 139.284C3.81473 99.3906 3.76679 41.941 3.76681 3.41992"
          stroke="black"
          stroke-width="6"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Box>

      <Box
        as={"svg"}
        shadow={{ base: "heroImgMobile", md: "heroImg" }}
        position={"absolute"}
        bottom={"0px"}
        left={{ base: "-12px", md: "-16px" }}
        zIndex={-1}
        xmlns="http://www.w3.org/2000/svg"
        width={{ base: "355px", md: "557px" }}
        height="9px"
        viewBox="0 0 557 9"
        fill="none"
      >
        <path
          d="M453.331 4.15035C538.006 4.15035 526.18 4.15035 554 4.15035C553.522 4.42346 549.208 5.46821 547.427 5.67984C545.202 5.94439 486.826 5.80003 474.367 5.80003C431.718 5.80003 239.055 4.81306 226.445 4.81306M453.331 4.15035C453.331 4.15035 249.107 5.80003 216.535 5.80003C183.963 5.80003 191.667 5.84463 122.904 5.80003C71.4952 5.76669 10.0222 5.80003 5.88553 5.80003C1.74882 5.80003 3.27521 3.82104 3.27521 3.82104C32.1906 4.81304 82.5141 4.81306 148.607 4.81306C171.381 4.81306 198.02 4.81306 226.445 4.81306M453.331 4.15035C391.431 4.15035 303.702 4.81306 226.445 4.81306"
          stroke="black"
          stroke-width="6"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Box>
    </>
  );
};

export default HeroImgBox;
