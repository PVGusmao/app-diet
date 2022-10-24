import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BROWN_300};
`;

export const Text = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;