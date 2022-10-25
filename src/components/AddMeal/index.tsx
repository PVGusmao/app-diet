import React from 'react'
import { TouchableOpacityProps } from 'react-native';

import { Container, Button, Text, AddIcon, Title } from './styles';

type Props = TouchableOpacityProps;

function AddMeal({ ...rest }: Props){
  return (
    <Container { ...rest }>
      <Title>Refeições</Title>
      <Button>
        <AddIcon name="add"/>
        <Text>Nova Refeição</Text>
      </Button>
    </Container>
  );
}

export default AddMeal;