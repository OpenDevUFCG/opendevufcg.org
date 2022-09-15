import React from 'react';

import { Wrapper, Title } from './style'

import { EventCard } from '../../components/EventCard';

export const Events = () => {
  return (
    <Wrapper>
      <Title>
        Nossos Eventos
      </Title>
      <EventCard />
    </Wrapper>
  )
}