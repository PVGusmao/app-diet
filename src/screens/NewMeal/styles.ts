import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Body = styled.View`
  align-items: center;
  flex: 1;
  justify-content: space-evenly;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  padding-top: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.COLORS.BROWN_400};

  height: 50px;
  width: 45%;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.BROWN_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Wrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 90%;
`

export const Text = styled.Text`
  align-self: flex-start;

  margin-left: 20px;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.COLORS.BROWN_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;