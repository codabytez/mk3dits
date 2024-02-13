import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

const ProjectCardBox: NextPage = () => {
  return (
    <>
      <Box
        as={"svg"}
        position={"absolute"}
        left={"-8px"}
        shadow={{ base: "projectMobile", md: "project" }}
        xmlns="http://www.w3.org/2000/svg"
        width={"10px"}
        height={{ base: "370.4px", md: "569px" }}
        viewBox="0 0 10 569"
        fill="none"
      >
        <path
          d="M5.29118 3.39062C5.29118 63.1175 5.92759 87.1203 5.92759 150.639M5.92759 150.639C5.92759 214.158 5.8292 329.929 5.29118 407.738C4.75315 485.547 4.33571 561.284 4.33571 561.284C4.33571 572.274 3.15888 559.305 3.24471 553.457C3.35201 546.147 4.38161 338.177 4.38161 320.022C4.38161 301.866 5.29118 209.446 5.92759 150.639Z"
          stroke="black"
          stroke-width="6.28125"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Box>

      <Box
        as={"svg"}
        position={"absolute"}
        bottom={"-8px"}
        shadow={{ base: "projectMobile", md: "project" }}
        xmlns="http://www.w3.org/2000/svg"
        width={{ base: "350px", md: "574px" }}
        height={"9px"}
        viewBox="0 0 574 9"
        fill="none"
      >
        <path
          d="M466.981 3.71803C554.185 3.71803 542.005 3.71803 570.656 3.71803C570.164 4.00394 565.721 5.09767 563.887 5.31922C561.596 5.59616 501.476 5.44504 488.646 5.44504C444.723 5.44504 246.306 4.41181 233.321 4.41181M466.981 3.71803C466.981 3.71803 256.659 5.44504 223.114 5.44504C189.57 5.44504 197.504 5.49173 126.687 5.44504C73.7436 5.41013 10.435 5.44504 6.17481 5.44504C1.91458 5.44504 3.48655 3.37329 3.48655 3.37329C33.2654 4.41178 85.0916 4.4118 153.158 4.4118C176.612 4.4118 204.047 4.4118 233.321 4.41181M466.981 3.71803C403.233 3.71803 312.884 4.41181 233.321 4.41181"
          stroke="black"
          stroke-width="6.28125"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Box>

      <Box
        as={"svg"}
        position={"absolute"}
        right={"-8px"}
        shadow={{ base: "projectMobile", md: "project" }}
        zIndex={-1}
        xmlns="http://www.w3.org/2000/svg"
        width={"9px"}
        height={{ base: "370.4px", md: "569px" }}
        viewBox="0 0 9 568"
        fill="none"
      >
        <path
          d="M4.42009 282.75C4.42057 352.257 5.83697 395.989 5.83715 441.435C5.83732 486.882 5.11363 563.873 5.11363 563.873C5.11363 563.873 3.44715 567.117 3.44727 560.777C3.44738 554.437 4.53672 509.366 4.42009 444.591C4.30345 379.817 4.3086 311.942 4.42009 282.75ZM4.42009 282.75C4.41986 249.985 3.66343 183.055 3.70818 145.811C3.75835 104.047 3.70816 43.9049 3.70818 3.57812"
          stroke="black"
          stroke-width="6.28125"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Box>

      <Box
        as={"svg"}
        position={"absolute"}
        top={"-8px"}
        shadow={{ base: "projectMobile", md: "project" }}
        xmlns="http://www.w3.org/2000/svg"
        width={{ base: "350px", md: "574px" }}
        height={"9px"}
        viewBox="0 0 569 9"
        fill="none"
      >
        <path
          d="M3.71875 4.9025C34.2536 4.9025 60.8946 4.9025 76.6024 4.9025M76.6024 4.9025C92.3102 4.9025 162.052 5.20768 191.583 5.20769M76.6024 4.9025C76.6024 4.9025 110.666 3.95243 130.637 3.95243C150.608 3.95243 191.583 5.20769 191.583 5.20769M564.891 5.20769C533.638 5.20769 548.088 4.9025 517.047 4.9025C499.352 4.9025 477.707 5.41114 446.676 5.20769M274.705 3.95243C296.181 3.98183 408.427 4.95691 446.676 5.20769M274.705 3.95243C252.495 3.92204 221.113 5.20769 191.583 5.20769M274.705 3.95243C274.705 3.95243 328.554 3.95243 358.713 3.95243M446.676 5.20769C446.676 5.20769 388.872 3.95243 358.713 3.95243M191.583 5.20769C209.683 5.20769 251.648 5.20769 274.705 5.20769C297.763 5.20769 340.318 4.37085 358.713 3.95243"
          stroke="black"
          stroke-width="6.28125"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Box>
    </>
  );
};

export default ProjectCardBox;
