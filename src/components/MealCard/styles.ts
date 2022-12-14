import styled from 'styled-components/native'
import { Octicons } from '@expo/vector-icons';

export type DietOrNotMealTypeStyle = 'DIET' | 'NOT DIET'; 

type Props = {
  type: DietOrNotMealTypeStyle;
}

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  height: 50px;
  width: 90%;

  margin: 5px 0px;
  
  border: 1px solid ${({ theme }) => theme.COLORS.BROWN_300};
  border-radius: 5px;
`;

export const TimeOfTheMeal = styled.Text`
  color: ${({ theme }) => theme.COLORS.BROWN_700};

  width: 50px;

  margin-left: 20px;
`;

export const Separator = styled.Text`
  color: ${({ theme }) => theme.COLORS.BROWN_300};
`

export const NameOfTheMeal = styled.Text`
  text-align: center;

  width: 250px;
`;

export const DietOrNotMeal = styled(Octicons).attrs<Props>(({ theme, type }) => ({
  color: type === 'DIET' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK,
  size: 32
}))`
  opacity: 0.5;
  margin-right: 20px;
`;

export const Text = styled.Text`
  color: red;

  font-size: 16px;
  font-weight: bold;
`;