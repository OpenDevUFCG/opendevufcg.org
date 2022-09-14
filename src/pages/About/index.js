import { useEffect, useRef } from "react";
import { AboutSection } from "../../components/AboutSection";
import imgLogo from "../../assets/icons/Logo.svg";
import vIcon from "../../assets/icons/v.svg";
import { Logo, Wrapper, LogoSection, VICon } from "./style";

export const About = () => {
  const scrollRef = useRef("#about-us");

  const executeScroll = () => scrollRef.current.scrollIntoView();

  return (
    <Wrapper>
      <LogoSection>
        <Logo src={imgLogo} />
        <VICon src={vIcon} onClick={executeScroll} />
      </LogoSection>
      <div ref={scrollRef}>
        <AboutSection />
      </div>
    </Wrapper>
  );
};
