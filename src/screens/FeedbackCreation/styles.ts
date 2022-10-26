import styled from 'styled-components/native'

type Props = {
  onDiet: boolean;
}

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text<Props>`
  color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  color:  ${({ theme }) => theme.COLORS.BROWN_700 };
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  width: 70%;

  text-align: center;

  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 300px;
  height: 400px;
`

export const Wrapper = styled.View`
  margin-top: 20px;
  width: 70%;
`