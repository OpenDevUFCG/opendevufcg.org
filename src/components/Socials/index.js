import { Card, CardText, Title, Description, Icon, IconContainer } from './styles'
import GithubIcon from '../../assets/icons/GithubIcon'

function Socials({ title, mediaName, description, icon }) {
  return (
    <Card>
      <CardText>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardText>

      {/* <IconContainer>
        <Icon src={icon} alt={`Icone de ${mediaName}`} />
      </IconContainer> */}
      <IconContainer>
        <GithubIcon />
      </IconContainer>
    </Card>
  )
}

export default Socials