import { useRef, useState } from "react";
import { AboutSection } from "../../components/AboutSection";
import imgLogo from "../../assets/icons/Logo.svg";
import vIcon from "../../assets/icons/v.svg";
import { useEffect } from "react";
import { Member } from "../../components/Member";
import { SectionTitle } from "../../components";
import {
  Logo,
  Wrapper,
  LogoSection,
  VICon,
  Text,
  MembersSection,
  MembersContainer,
} from "./style";
import { queryMembers } from "../../service/github";

export const About = () => {
  const scrollRef = useRef("#about-us");
  const executeScroll = () => scrollRef.current.scrollIntoView();
  const [coreMembers, setCoreMembers] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data: members } = await queryMembers();
      setCoreMembers(members);
      console.log(members);
    }

    getData();
  }, []);

  return (
    <Wrapper>
      <LogoSection>
        <Logo src={imgLogo} />
        <VICon src={vIcon} onClick={executeScroll} />
      </LogoSection>
      <div ref={scrollRef}>
        <AboutSection />
      </div>
      <MembersSection>
        <SectionTitle>Nosso core</SectionTitle>
        <Text>
          Esse é o nosso core, a equipe responsável por organizar desde o início
          os eventos, manter os projetos da OpenDev e garantir que a comunidade
          permanceça seguindo em um caminho coerente.
        </Text>
        <MembersContainer>
          {coreMembers.map((member) => (
            <Member
              githubURL={member.html_url}
              srcImg={member.avatar_url}
              name={member.login}
            />
          ))}
        </MembersContainer>
      </MembersSection>
    </Wrapper>
  );
};
