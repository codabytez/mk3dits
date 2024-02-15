import React from "react";
import { VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import HeroPage from "./hero/HeroPage";
import Strap from "../Strap";
import Services from "./services/Services";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";

const HomePage: NextPage = () => {
  return (
    <VStack
      alignItems={"flex-start"}
      maxW={"1440px"}
      overflowX={"hidden"}
      w={"full"}
    >
      <HeroPage />

      <Strap />

      <Services />

      <Projects />

      <Skills />

      <Testimonials />

      <Contact />
    </VStack>
  );
};

export default HomePage;


