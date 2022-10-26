import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  justify-content: center;

  margin-top: 20px;
  margin-bottom: 20px;

  width: 100%;
  height: 50px;

  background-color: white;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-left: 20px;
  margin-bottom: 10px;
`

export const Button = styled.View`
  align-self: center;

  background-color: ${({ theme }) => theme.COLORS.BROWN_700};

  width: 100%;
  height: 100%;

  border-radius: 10px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE };
  
  font-size: 16px;
  font-weight: bold;

  margin-left: 10px;
`;

export const AddIcon = styled(Ionicons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32
}))`
`;
