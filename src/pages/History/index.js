import { SectionTitle } from "../../components";
import heartIcon from "../../assets/icons/heart.svg";
import { Carousel } from "../../components/Carousel";
import {
  HistoryContainer,
  Text,
  Wrapper,
  HistoryTitle,
  MembersContainer,
  MembersText,
  MembersList,
} from "./style";
import { old_members } from "../../util/constants";
import { Member } from "../../components/Member";

export const History = () => {
  return (
    <Wrapper>
      <HistoryContainer>
        <HistoryTitle>Um pouco da nossa história</HistoryTitle>
        <Carousel />
        <Text>
          <strong>Olá! Essa é um pouco da nossa história:</strong>
        </Text>
        <Text>
          A OpenDev nasceu em 2018 fruto de um desejo de alguns estudantes da
          UFCG que sentiam que a universidade possuia uma deficiência cultural
          quanto à cultura open source (código aberto), uma cultura com uma
          importância gigante no mundo de programação em geral. Por causa disso,
          a OpenDevUFCG nasceu com esse objetivo principal de fomentar essa
          cultura dentro da universidade através de projetos e eventos voltados
          para a própria comunidade estudantil. Alguns de nossos primeiros
          projetos foram o <strong>Tamburetei</strong> e o{" "}
          <strong>glossárioUFCG</strong>, desde sempre focados em facilitar a
          vida acadêmica do estudante de computação, mas também trazendo-lhe ao
          mesmo tempo uma carga de conhecimento complementar nas diversas áreas
          do conhecimento com o desenvolvimento desses projetos.
        </Text>
        <Text>
          Como consequência natural da criação e manutenção dos projetos a
          OpenDevUFCG decidiu criar o seu primeiro evento universitário, o{" "}
          <strong>hacktoberfest</strong>. O hacktoberfest é um evento global que
          acontece todo ano durante o mês de outubro com um objetivo
          extremamente alinhado com a nossa organização, o de incentivar a
          cultura open source!
        </Text>
        <Text>
          Sendo assim, em outubro de 2019 o{" "}
          <strong>hacktoberfest OpenDevUFCG</strong> nasceu, um dia inteiro de
          minicursos, palestras e joguinhos na própria UFCG levando conhecimento
          e leveza para outros estudantes do curso. O hacktoberfest OpenDevUFCG
          já está indo para a sua quarta edição em 2022 e muita coisa massa vem
          por aí.
        </Text>
        <Text>
          Um outro evento muito importante para nós, trazendo muito aprendizado
          e relevância para a organização foi o <strong>andromedev</strong>, um
          evento onde pessoas sem muita experiência com projetos de programação
          puderam passar três meses imersos em projetos de diversas
          organizações. Cada projeto possuia um mentor e um aprendiz, que juntos
          trabalhavam no desenvolvimento de um projeto trazido pela própria
          organização! O evento gerou muitos frutos para a própria opendev como
          também para os próprios aprendizes dos projetos.
        </Text>
        <Text>
          Ja no finalzinho do texto, nós da opendev sabemos que apesar de todos
          os percalços da pandemia nós conseguimos permanecer juntos e
          desenvolvendo projetos incríveis com pessoas ainda mais sensacionais,
          trazendo apoio de uns para os outros e sempre entendendo que as
          relações que criamos são as coisas que mantém nossos projetos vivos e
          que nos mantém em pé diante das dificuldades.
        </Text>
        <Text>
          <strong>
            A OpenDevUFCG agradece a todos que ja fizeram e vão fazer parte da
            nossa história do seu jeitinho
          </strong>
        </Text>
      </HistoryContainer>
      <MembersContainer>
        <SectionTitle>
          Deixaram Saudade{" "}
          <img src={heartIcon} alt="Red heart icon with pointy edges" />
        </SectionTitle>
        <MembersText>
          Sabemos da importância da história, de relembrar e de homenagear
          aqueles que fizeram com que sejamos o que somos hoje. Por isso, tão
          importantes quanto os membros atuais são aqueles que não estão mais
          ativos no core, mas que fazem parte do coração dessa comunidade. Vocẽs
          são preciosos!
        </MembersText>
        <MembersList>
          {old_members.map((member) => (
            <Member {...member} />
          ))}
        </MembersList>
      </MembersContainer>
    </Wrapper>
  );
};
