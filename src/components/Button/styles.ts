import styled, { css } from 'styled-components/native'
import { Octicons } from '@expo/vector-icons';

export type YesOrNoButtonTypeStyle = 'YES' | 'NO';

type Props = {
  type: YesOrNoButtonTypeStyle;
  clicked: string | boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 5px;

  flex-direction: row;

  padding: 10px 10px;
  width: 45%;

  ${({clicked}) => {
    switch (clicked) {
      case true:
        return css`
          border: 1px solid ${({ theme }) => theme.COLORS.GREEN_500};

          background-color: ${({ theme }) => theme.COLORS.GREEN_200};
        `;
      case false:
        return css`
          border: 1px solid ${({ theme }) => theme.COLORS.RED_DARK};
          
          background-color: ${({ theme }) => theme.COLORS.RED};
        `;
      default:
        return css`
        `;
    }
  }}
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