import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';

export type PaddingTypeStyleContainer = 20 | 0;
export type BlockDataTypeStyle = 'PRIMARY' | 'SECONDARY';
export type BlockBackColorTypeStyle = 'DARK' | 'LIGHT';

type Props = {
  padding: PaddingTypeStyleContainer;
  type: BlockDataTypeStyle;
  bgColorType: BlockBackColorTypeStyle;
  inOrOutDiet: boolean;
}

export const Container = styled.View<Props>`
  align-items: center;

  padding: ${({ padding }) => padding === 20 ? 20 : 0}px;

  width: ${({ type }) => type === 'PRIMARY' ? 100 : 50}%;

  margin-bottom: 10px;

  /* background-color: blue; */
`;

export const Button = styled.View<Props>`
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  
  background-color: ${({ theme, inOrOutDiet }) => !inOrOutDiet ? theme.COLORS.GREEN_200 : theme.COLORS.RED};

  height: 120px;
  width: 100%;
`;

export const Information = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const DetailsButton = styled.TouchableOpacity`
  position: absolute;

  top: 8px;
  right: 8px;
`

export const DetailsIcon = styled(Feather).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 40
}))`
`