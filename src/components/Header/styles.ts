import styled from 'styled-components/native'

import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  /* flex: 0.15; */

  flex-direction: row;

  padding: 20px;
  padding-bottom: 20px;

  /* background-color: red; */

  width: 100%;
`;

export const ButtonGetImage = styled.TouchableOpacity`
`

export const Logo = styled.Image`
  
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BROWN_700};
`

export const Avatar = styled.Image`
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  width: 48px;
  height: 48px;
`
  
export const BackButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`

export const BackIcon = styled(Ionicons).attrs(({ theme }) => ({
  color: theme.COLORS.BROWN_700,
  size: 32
}))`
  flex: 0.72;
`

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  color: theme.COLORS.BROWN_700,
  size: 48
}))`
`

