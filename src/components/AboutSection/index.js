import { CardsContainer, Title, Wrapper } from "./style";
import { Card } from "./Card";
import ComunnityImg from "../../assets/icons/community.svg";
import EmpowermentImg from "../../assets/icons/empowerment.svg";
import LightBoxImg from "../../assets/icons/light-box.svg";
export const AboutSection = ({ ref }) => {
  return (
    <Wrapper ref={ref}>
      <Title id="about-us">Sobre nós</Title>
      <p>
        Somos uma comunidade voltada a incentivar a cultura open source no curso
        de Ciência da Computação da UFCG
      </p>
      <CardsContainer>
        <Card
          title="Comunidade"
          img={ComunnityImg}
          alt="Representação de três pessoas formando uma corrente para representar uma comunidade."
        >
          Juntos fazemos mais, por isso nos esforçamos em criar uma comunidade
          que exista diálogo, amizade, respeito e suporte. Todos são bem vindos,
          seja para contribuir, sugerir novas ideias ou pedir ajuda.
        </Card>
        <Card
          title="Open Source"
          img={LightBoxImg}
          alt="Representação de uma caixa de papelão com uma lâmpada saindo através do topo dela, a lâmpada está acesa"
        >
          Open Source permite que qualquer pessoa possa ver, modificar,
          contribuir e distribuir seu código. Acreditamos que o Open Source nos
          conecta, todos nossos projetos são Open Source e queremos espalhar
          essa cultura pela UFCG e quem sabe até fora dela.
        </Card>
        <Card
          title="Empoderamentos"
          img={EmpowermentImg}
          alt="Representação de uma pessoa dançando, com uma estrela, serpentina, quadrado e nota musical ao lado."
        >
          Queremos empoderar todo tipo de pessoas, todos podem aprender, sugerir
          e ajudar na OpenDevUFCG. Queremos ser a comunidade que encoraja todos
          a tomarem o primeiro passo, a sugerir e construir novas ideias.
        </Card>
      </CardsContainer>
    </Wrapper>
  );
};
