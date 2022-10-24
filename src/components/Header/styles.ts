import styled from 'styled-components/native'

import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  padding: 20px;
  width: 100%;
`;

export const ButtonGetImage = styled.TouchableOpacity`

`

export const Logo = styled.Image`
  
`

export const Avatar = styled.Image`
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
`

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  color: theme.COLORS.BROWN_700,
  size: 48
}))`
`
