import React from 'react'
import { Button, Container, Description, DetailsIcon, Information } from './styles';

function BlockData() {
  return (
    <Container>
      <Button>
        <DetailsIcon name='arrow-up-right' />
        <Information>n%</Information>
        <Description>das refeições dentro da dieta</Description>
      </Button>
    </Container>
  );
}

export default BlockData;