import React from 'react';
import { Container, InputName, NewInput } from './styles';

type Props = {
  name: string;
}

function Input({name}: Props){
  return (
    <Container>
      <InputName>{name}</InputName>
      <NewInput />
    </Container>
  );
}

export default Input;
