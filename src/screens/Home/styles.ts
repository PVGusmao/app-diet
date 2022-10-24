import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Text = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;