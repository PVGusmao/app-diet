import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;

  width: 90%;
  height: 50px;

  /* background-color: black; */
`;

export const InputName = styled.Text`
  color: ${({ theme }) => theme.COLORS.BROWN_700};

  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const NewInput = styled.TextInput`
  width: 100%;
  height: 50px;

  padding: 10px;

  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.BROWN_400}
`
