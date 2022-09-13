import { Wrapper, Tooltip } from "./style"

/**
 * 
 * @githubURL {string} Uma url do Github do membro
 * @srcImg {string} O source da imagem do membro
 * @name {string} O nome do membro
 * @width {number} Um número que será a medida do componente, o componente será renderizado com a unidade em rem.
 *  
 */
export const Member = ({ githubURL, srcImg, name, width}) => {
    return(
        <Wrapper href={githubURL} target="_blank" width={width}>
            <div>
                <img src={srcImg} alt={`Foto de ${name}`}/>
            </div>
            
            <Tooltip>{name}</Tooltip>
        </Wrapper> 
    )
}