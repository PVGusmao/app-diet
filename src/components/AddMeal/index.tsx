import React from 'react'
import { TouchableOpacityProps } from 'react-native';

import { Container, Button, Text, AddIcon, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  showIcon?: boolean;
};

function AddMeal({ title, showIcon = true, ...rest }: Props){
  return (
    <Container { ...rest }>
      {
        showIcon &&
        <Title>Refeições</Title>
      }
      <Button>
        {
          showIcon &&
          <AddIcon name="add"/>
        }
        <Text>{title}</Text>
      </Button>
    </Container>
  );
}

export default AddMeal;