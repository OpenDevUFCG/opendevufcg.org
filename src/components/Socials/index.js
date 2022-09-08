import { Card, CardText, Title, Description, Icon } from './styles'

function Socials({ title, mediaName, description, icon, link, ...props}) {
  return (
      <Card href={link} target="_blank" rel="noopener noreferrer" {...props}>
        <CardText>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CardText>

          <Icon src={icon} alt={`Icone de ${mediaName}`} />
      </Card>
  )
}

export default Socials