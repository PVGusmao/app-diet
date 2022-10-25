import React from 'react'
import { Container, Button, Text, AddIcon, Title } from './styles';

function AddMeal(){
  return (
    <Container>
      <Title>Refeições</Title>
      <Button>
        <AddIcon name="add"/>
        <Text>Nova Refeição</Text>
      </Button>
    </Container>
  );
}

export default AddMeal;