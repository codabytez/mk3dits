import { NextPage } from "next";
import { Box, Button as Btn, ButtonProps } from "@chakra-ui/react";

const Button: NextPage<ButtonProps> = (props) => {
  return (
    <Box position="relative" role="group" display={"flex"}>
      <Btn {...props}>{props.children}</Btn>

      <Box
        as={"svg"}
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="83"
        viewBox="0 0 76 83"
        fill="none"
        position={"absolute"}
        right={"-44px"}
        bottom={"-45px"}
        display={"none"}
        transition={"all 0.3s ease-in-out"}
        _groupHover={{
          display: "flex",
        }}
      >
        <g clip-path="url(#clip0_300_3336)">
          <path
            d="M59.9395 13.7752C59.3599 12.8883 54.1821 12.1413 48.2488 11.9651C39.0209 11.7203 37.4627 12.0754 36.9168 13.9497C35.3552 18.6471 37.5243 19.7032 48.3104 19.593C60.0067 19.2974 62.9527 17.9394 59.9395 13.7752Z"
            fill="black"
          />
          <path
            d="M42.7237 42.0844C31.3514 34.5978 27.8629 33.4879 28.114 37.6836C28.216 39.3881 32.1002 42.7114 39.7744 47.7848C46.2133 52.01 51.8104 55.3638 52.4661 55.3251C52.9907 55.2942 53.4291 53.8209 53.3271 52.1164C53.1858 49.7564 50.537 47.2812 42.7237 42.0844Z"
            fill="black"
          />
          <path
            d="M28.6293 65.0589C22.6556 55.4116 15.5722 47.0139 14.1844 48.0168C11.7866 49.7373 13.2103 53.7322 19.3521 61.7907C22.6511 66.3327 26.2281 71.1216 27.2404 72.6408C28.2526 74.16 29.5115 75.4015 30.1672 75.3628C32.9215 75.2002 32.2691 70.8966 28.6293 65.0589Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_300_3336">
            <rect
              width="38"
              height="80"
              fill="white"
              transform="translate(44) rotate(32.8917)"
            />
          </clipPath>
        </defs>
      </Box>
    </Box>
  );
};

export default Button;
