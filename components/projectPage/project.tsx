import React from "react";
import { NextPage } from "next";
import { VStack } from "@chakra-ui/react";
import Prototype from "./prototype";
import UiScreen from "./uiScreens";
import Typography from "./typography";
import Colors from "./colors";
import LogoDesign from "./logoDesign";
import ProjectDetails from "./projectDetails";
import ProjectMetaData from "./projectMetaData";
import ViewMore from "./cta";

const Project: NextPage = () => {
  return (
    <VStack mt={{ base: "110px", xl: "200px" }} spacing={20} w={"full"}>
      <ProjectMetaData />

      <ProjectDetails />

      <LogoDesign />

      <Colors />

      <Typography />

      <UiScreen />

      <Prototype />

      <ViewMore />
    </VStack>
  );
};

export default Project;
