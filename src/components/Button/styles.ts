import styled from 'styled-components/native'
import { Octicons } from '@expo/vector-icons';

export type YesOrNoButtonTypeStyle = 'YES' | 'NO';

type Props = {
  type: YesOrNoButtonTypeStyle;
}

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 5px;

  flex-direction: row;

  padding: 10px 10px;
  width: 45%;
`;

export const Icon = styled(Octicons).attrs<Props>(({ theme, type }) => ({
  color: type === 'YES' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK,
  size: 26
}))`
  margin-right: 10px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BROWN_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;