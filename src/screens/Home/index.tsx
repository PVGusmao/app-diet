import React from 'react'
import { StatusBar } from 'react-native';

import { Container, Text } from './styles';

import Header from '@components/Header';
import { useTheme } from 'styled-components';

function Home(){
  const theme = useTheme()

  return (
    <Container>
      <Header />

      <Text>Meu componente</Text>

      <StatusBar
        translucent={false}
        barStyle='light-content'
        backgroundColor={theme.COLORS.BROWN_700}
      />
    </Container>
  );
}

export default Home;