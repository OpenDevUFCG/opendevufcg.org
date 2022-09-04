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

export const Carousel = ({ imagesId }) => {
  const [currentPhoto, setCurrentePhoto] = useState(0);
  const [ascendent, setAscendent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      ascendent === true
        ? setCurrentePhoto((previous) => previous + 1)
        : setCurrentePhoto((previous) => previous - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [ascendent, currentPhoto]);

  useEffect(() => {
    if (currentPhoto >= imagesId.length) setAscendent(false);
    if (currentPhoto <= 0) setAscendent(true);
  }, [currentPhoto, imagesId.length]);

  return (
    <Wrapper>
      <OutContainer translate={currentPhoto} imagesLength={imagesId.length + 1}>
        <BackgroundImg src={Logo} />
        {imagesId.map((id, i) => (
          <img
            key={i}
            src={`https://drive.google.com/uc?export=view&id=${[id]}`}
            alt="Vacas pretas sao vagas mortas"
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
    "1TVtOEGrDH_Jnj0j9VOSv43dDJu3roJrC",
    "1AYzS5eSPHo4fBaIcQk1fF4KIa9fWiVZf",
    "1yjYUSGM1WKEIdeQ_PNyhBQPmKOreeJAh",
    "1pps-lzTmoYV9PlwsQtELgRZhZGKGnpFW",
  ],
};

Carousel.propTypes = {
  imagesId: PropTypes.arrayOf(PropTypes.string),
};
