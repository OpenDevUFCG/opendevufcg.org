import { HighlightText, CardContainer, Icon } from "./style";

export const Card = ({ img, alt, title, children }) => {
  return (
    <CardContainer>
      <Icon src={img} alt={alt} />
      <HighlightText>{title}</HighlightText>
      <p>{children}</p>
    </CardContainer>
  );
};
