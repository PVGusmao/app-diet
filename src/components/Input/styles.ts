import styled from 'styled-components/native'

export type InputSizeStyleType = 'FULL' | 'HALF';

type Props = {
  size: InputSizeStyleType;
  height: number;
}

export const Container = styled.TextInput<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  border: 1px solid ${({ theme }) => theme.COLORS.BROWN_400};
  border-radius: 10px;

  padding: 10px;
  margin-bottom: 20px;

  width: ${({ size }) => size === 'FULL' ? 90 : 45}%;
  height: ${({ height }) => height ? height : 50}px;
`;

export const Text = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;