import React from 'react'
import { TouchableOpacityProps } from 'react-native';

import { Container, TimeOfTheMeal, NameOfTheMeal,
  DietOrNotMeal, DietOrNotMealTypeStyle, Separator } from './styles';

type Props = TouchableOpacityProps & {
  timeOfTheMeal: string;
  nameOfTheMEal: string;
  type?: DietOrNotMealTypeStyle;
}

function MealCard({ timeOfTheMeal, nameOfTheMEal, type = 'DIET', ...rest }: Props){
  return (
    <Container { ...rest }>
      <TimeOfTheMeal>{timeOfTheMeal.split(':')[1] === '0' ? timeOfTheMeal + '0': timeOfTheMeal}</TimeOfTheMeal>
      <Separator>|</Separator>
      <NameOfTheMeal>{nameOfTheMEal}</NameOfTheMeal>
      <DietOrNotMeal type={type} name="dot-fill" />
    </Container>
  );
}

export default MealCard;
