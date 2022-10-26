import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 90%;
`

export const Text = styled.Text`
  align-self: flex-start;

  margin-left: 20px;
  margin-bottom: 5px;

  color: ${({ theme }) => theme.COLORS.BROWN_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;