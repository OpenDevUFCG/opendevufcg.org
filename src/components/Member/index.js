import { Wrapper, Tooltip } from "./style"

export const Member = ({ githubURL, srcImg, name, widthInRem}) => {
    return(
        <Wrapper href={githubURL} target="_blank" width={widthInRem}>
            <div>
                <img src={srcImg} alt={`Foto de ${name}`}/>
            </div>
            
            <Tooltip>{name}</Tooltip>
        </Wrapper> 
    )
}