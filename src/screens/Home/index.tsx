import { StatusBar } from 'react-native';

import React from 'react'
import { useTheme } from 'styled-components';

import { Container, Text } from './styles';

import Header from '@components/Header';
import BlockData from '@components/BlockData';

function Home(){
  const theme = useTheme()

  return (
    <Container>

      <Header />

      <BlockData />

      <StatusBar
        translucent={false}
        barStyle='light-content'
        backgroundColor={theme.COLORS.BROWN_700}
      />
    </Container>
  );
}

export default Home;