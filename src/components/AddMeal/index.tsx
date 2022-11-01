import React from 'react'
import { TouchableOpacityProps } from 'react-native';

import { Container, Button, Text, AddIcon, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  showIcon?: boolean;
  filled?: boolean;
};

function AddMeal({filled = false, title, showIcon = true, ...rest }: Props){
  return (
    <Container { ...rest }>
      {
        showIcon &&
        <Title>Refeições</Title>
      }
      <Button filled={filled}>
        {
          showIcon &&
          <AddIcon name="add"/>
        }
        <Text filled={filled}>{title}</Text>
      </Button>
    </Container>
  );
}

export default AddMeal;