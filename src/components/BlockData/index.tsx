import React from 'react'
import { Button, Container, Description, DetailsIcon, Information } from './styles';

type Props = {
  information: string,
  description: string,
}

function BlockData({ information, description }: Props) {
  return (
    <Container>
      <Button>
        <DetailsIcon name='arrow-up-right' />
        <Information>{ information }</Information>
        <Description>{ description }</Description>
      </Button>
    </Container>
  );
}

export default BlockData;