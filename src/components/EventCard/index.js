import React from 'react';

import { Card, ImageSide, EventImage, InfoSide, Title, Date, Description, UpperRow, LowerRow } from './style'
import tempImg from '../../assets/imgs/logoandromedev.png'

export const EventCard = ({
  name = "Andromedev 2020",
  init_date = "dd/mm/yyyy",
  end_date = "dd/mm/yyyy",
  org_image = tempImg,
  description = "O Andromedev é um evento organizado pela organização estudantil OpenDevUFCG com o intuito de incentivar a participação de estudantes da Universidade Federal de Campina Grande (UFCG) em projetos open source. O evento ocorre em um período de nove semanas nas quais os estudantes colaboram com projetos open source através de um sistema de mentoria."
}) => {
  return (
    <Card>
      <UpperRow>
        <ImageSide>
          <EventImage src={org_image} alt={name} />
        </ImageSide>
        <InfoSide>
          <Title>{name}</Title>
          <Date>Data do evento - {init_date}</Date>
        </InfoSide>
      </UpperRow>
      <LowerRow>
        <Description>{description}</Description>
      </LowerRow>
    </Card>
  )
}