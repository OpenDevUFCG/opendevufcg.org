import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/img/logopendev.png";
import {
  DotsContainer,
  BackgroundImg,
  Dot,
  OutContainer,
  Wrapper,
} from "./style";
import { useInterval } from "../../util/hooks";

export const Carousel = ({ imagesId }) => {
  const [currentPhoto, setCurrentePhoto] = useState(0);
  const [ascendent, setAscendent] = useState(true);

  useInterval(() => {
    ascendent === true
      ? setCurrentePhoto((previous) => previous + 1)
      : setCurrentePhoto((previous) => previous - 1);
  }, 5000);

  useEffect(() => {
    if (currentPhoto >= imagesId.length) setAscendent(false);
    if (currentPhoto <= 0) setAscendent(true);
  }, [currentPhoto, imagesId.length]);

  return (
    <Wrapper>
      <OutContainer translate={currentPhoto} imagesLength={imagesId.length + 1}>
        <BackgroundImg src={Logo} />
        {imagesId.map((imageData, i) => (
          <img
            key={i}
            src={`https://drive.google.com/uc?export=view&id=${[imageData.id]}`}
            alt={imageData.alt}
          />
        ))}
      </OutContainer>
      <DotsContainer>
        <Dot active={0 === currentPhoto} onClick={() => setCurrentePhoto(0)} />
        {imagesId.map((_, i) => (
          <Dot
            active={i + 1 === currentPhoto}
            key={i}
            onClick={() => setCurrentePhoto(i + 1)}
          />
        ))}
      </DotsContainer>
    </Wrapper>
  );
};

Carousel.defaultProps = {
  imagesId: [
    {
      id: "1TVtOEGrDH_Jnj0j9VOSv43dDJu3roJrC",
      alt: "Grupo de 11 pessoas, e um balão branco com um rosto feliz, participantes do core team da opendev. Todos estão vestidos com a camisa do evento.",
    },
    {
      id: "1Q-oZgMUagvvTnLMQrna00m_NqsP1zKCQ",
      alt: "Grupo de muitas pessoas posando para a foto do evento, com todos os organizadores e participantes do evento amontoados.",
    },
    {
      id: "1AYzS5eSPHo4fBaIcQk1fF4KIa9fWiVZf",
      alt: "Integrantes do core team na semana do fera sentados com um microfone olhando algo que está sendo apresentado",
    },
    {
      id: "1yjYUSGM1WKEIdeQ_PNyhBQPmKOreeJAh",
      alt: "Mulher de costas com camisa com a logo da VTEX olhando para um grupo de pessoas sentadas em frente a computadores",
    },
  ],
};

Carousel.propTypes = {
  imagesId: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, alt: PropTypes.string })
  ),
};
