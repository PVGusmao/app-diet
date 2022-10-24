import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;

  padding: 20px;
  
  width: 100%;
  `;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.GREEN_200};
  
  border-radius: 10px;

  height: 120px;
  width: 100%;
`;

export const Information = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const DetailsIcon = styled(Feather).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 30
}))`
  position: absolute;

  top: 0;
  right: 0;
`