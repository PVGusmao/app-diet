import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_200};
`;

export const MainInformation = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 20px 0px;

  flex: 0.25;
`

export const OtherInformation = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};;

  width: 100%;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  flex: 1;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BROWN_700};
  font-size: 16px;
  font-weight: bold;
`;

export const BlockDataWrapper = styled.View`
  flex-direction: row;
`