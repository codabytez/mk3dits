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
    <VStack alignItems={"flex-start"}>
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

// sm: 30em | 480px
// md: 48em | 768px
// lg: 62em | 992px
// xl: 80em | 1280px
// 2xl: 96em | 1536px
