import styled from 'styled-components/native'

export const Container = styled.ActivityIndicator`
  align-items: center;
  flex: 1;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

