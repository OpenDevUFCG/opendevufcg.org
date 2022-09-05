import { Card, CardText, Title, Description, Icon, IconContainer } from './styles'

function Socials({ title, mediaName, description, icon, ...props}) {
  return (
    <Card {...props}>
      <CardText>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardText>

      <IconContainer>
        <Icon src={icon} alt={`Icone de ${mediaName}`} />
      </IconContainer>
    </Card>
  )
}

export default Socials