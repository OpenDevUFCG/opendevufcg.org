import { Wrapper } from "./style";
import PropTypes from "prop-types";
/**
 *
 * @githubURL {string} Uma url do Github do membro
 * @srcImg {string} O source da imagem do membro
 * @name {string} O nome do membro
 * @width {number} Um número que será a medida do componente, o componente será renderizado com a unidade em rem.
 *
 */
export const Member = ({ githubURL, srcImg, name, width }) => {
  return (
    <Wrapper href={githubURL} target="_blank" width={width} title={name}>
      <img src={srcImg} alt={`Foto de ${name}`} />
    </Wrapper>
  );
};

Member.defaultProps = {
  githubURL: "https://github.com/OpenDevUFCG",
  srcImg: "https://avatars.githubusercontent.com/u/42285400?v=4",
  name: "OpenDevUFCG",
  width: 4.5,
};

Member.propTypes = {
  githubURL: PropTypes.string,
  srcImg: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.number,
};
