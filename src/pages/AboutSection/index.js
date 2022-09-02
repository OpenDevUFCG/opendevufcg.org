import { Card, CardsContainer, HighlightText, Title, Wrapper } from "./style";
import ComunnityImg from '../../assets/community.svg';
import EmpowermentImg from '../../assets/empowerment.svg';
import LightBoxImg from '../../assets/light-box.svg';
export const AboutSection = () => {
  return (
    <Wrapper>
          <Title>Sobre nós</Title>
          <p>Somos uma comunidade voltada a incentivar a cultura open source no curso de Ciência da Computação da UFCG</p>
          <CardsContainer>
            <Card>
              <div>
                <img src={ComunnityImg} alt="Representação de rrês pessoas formando uma corrente para representar uma comunidade."/>
              </div>
              <HighlightText>Comunidade</HighlightText>
              <p>Juntos fazemos mais, por isso nos esforçamos em criar uma comunidade que exista diálogo, amizade, respeito e suporte. Todos são bem vindos, seja para contribuir, sugerir novas ideias ou pedir ajuda.</p>
            </Card>
            <Card>
              <div>
                <img src={LightBoxImg} alt="Representação de uma caixa de papelão com uma lâmpada saindo através do topo dela, a lâmpada está acesa"/>
              </div>
              <HighlightText>Open Source</HighlightText>
              <p>Open Source permite que qualquer pessoa possa ver, modificar, contribuir e distribuir seu código. Adotamos o Open Source como filosofia pois acreditamos que é isso que nos conecta, todos nossos projetos são Open Source e queremos espalhar essa cultura pela UFCG e quem sabe até fora dela.</p>
            </Card>
            <Card>
              <div>
                <img src={EmpowermentImg} alt="Representação de uma pessoa dançando, com uma estrela, serpentina, quadrado e nota musical ao lado."/>
              </div>
              <HighlightText class="highlight-text">Empoderamento</HighlightText>
              <p>Queremos empoderar pessoas, do iniciante ao experiente, todos podem aprender, sugerir e ajudar na OpenDevUFCG. Queremos ser a comunidade que possa encorajar pessoas a tomarem o primeiro passo, a sugerir novas ideias e principalmente, a contruí-las.</p>
            </Card>
          </CardsContainer>
        </Wrapper>
  )
};
