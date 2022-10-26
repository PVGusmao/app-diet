import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Wrapper = styled.View`
  width: 90%;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BROWN_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;