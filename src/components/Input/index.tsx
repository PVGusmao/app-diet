import React from 'react'
import { TextInputProps } from 'react-native';


import { Container, InputSizeStyleType, Text } from './styles';

type Props = TextInputProps & {
  size?: InputSizeStyleType;
  height?: number;
}

function Input({ size = 'FULL', height, ...rest }: Props){
  return (
    <Container height={height} {...rest} size={size}>

    </Container>
  );
}

export default Input;