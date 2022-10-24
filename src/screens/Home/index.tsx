import { StatusBar } from 'react-native';

import React from 'react'
import { useTheme } from 'styled-components';

import { Container } from './styles';

import Header from '@components/Header';
import BlockData from '@components/BlockData';

function Home(){
  const theme = useTheme()

  return (
    <Container>

      <Header />

      <BlockData
        information={`${90.86}%`}
        description='das refeições dentro da dieta'
      />

      <StatusBar
        translucent={false}
        barStyle='light-content'
        backgroundColor={theme.COLORS.BROWN_700}
      />
    </Container>
  );
}

export default Home;