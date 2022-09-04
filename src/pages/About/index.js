import { Carousel } from "../../components/Carousel";
import { AboutSection } from "../../components/AboutSection";
import { Wrapper } from "./style";

export const About = () => {
  return (
    <Wrapper>
      <Carousel />
      <AboutSection />
    </Wrapper>
  );
};
