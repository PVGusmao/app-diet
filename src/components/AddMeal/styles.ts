import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';

type Props = {
  filled: boolean;
}

export const Container = styled.TouchableOpacity`
  justify-content: center;

  margin: 10px 0;

  width: 100%;
  height: 50px;

  /* background-color: green; */
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-left: 20px;
  margin-bottom: 10px;
`

export const Button = styled.View<Props>`
  align-self: center;

  background-color: ${({ theme, filled }) => filled ? theme.COLORS.BROWN_700 : theme.COLORS.WHITE};

  border: 1px solid ${({ theme }) => theme.COLORS.BROWN_700};
  width: 100%;
  height: 100%;

  border-radius: 10px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
`

export const Text = styled.Text<Props>`
  color: ${({ theme, filled }) => filled ? theme.COLORS.WHITE : theme.COLORS.BROWN_700};
  
  font-size: 16px;
  font-weight: bold;

  margin-left: 10px;
`;

export const AddIcon = styled(Ionicons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32
}))`
`;
