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
  const savedMembers =
    JSON.parse(localStorage.getItem("@opendev/members")) || [];
  const [coreMembers, setCoreMembers] = useState(savedMembers);

  useEffect(() => {
    async function getData() {
      const { data: members } = await queryMembers();
      localStorage.setItem("@opendev/members", JSON.stringify(members));
      setCoreMembers(members);
    }

    getData();
  }, []);

  return (
    <Wrapper>
      <LogoSection>
        <Logo
          src={imgLogo}
          alt="Logo da openDev com o ícone da org e o nome OpenDevUFCG abaixo"
        />
        <VICon
          src={vIcon}
          onClick={executeScroll}
          alt="Blue icon in V format"
        />
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
          {coreMembers.map((member, i) => (
            <Member
              key={i}
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
