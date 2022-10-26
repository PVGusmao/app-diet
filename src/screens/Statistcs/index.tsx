import React from 'react'
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import Header from '@components/Header';
import BlockData from '@components/BlockData';

import { StatusBar } from 'react-native';

import { BlockDataWrapper, Container, MainInformation, OtherInformation, Text } from './styles';

function Statistics(){
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.goBack();
  }

  return (
    <Container>
        <Header
          onPress={handleNavigation}
          showBackButton
          showProfilePicture
        />
      <MainInformation>
        <BlockData
          detailsIcon
          padding={0}
          description='das refeições dentro da dieta'
          information={`${ 90.86 }%`}
        />
      </MainInformation>
      
      <OtherInformation>
        <Text>Estatísticas Gerais</Text>
        <BlockData
          detailsIcon
          backgroundColorType='LIGHT'
          padding={20}
          description='melhor sequência de pratos dentro da dieta'
          information={`${22}`}
        />

        <BlockData
          backgroundColorType='LIGHT'
          detailsIcon
          padding={20}
          description='refeições registradas'
          information={`${109}`}
        />


        <BlockDataWrapper>
          <BlockData
            backgroundColorType='LIGHT'
            detailsIcon
            type='SECONDARY'
            padding={20}
            description='refeições dentro da dieta'
            information={`${99}`}
          />

          <BlockData
            detailsIcon
            type='SECONDARY'
            padding={20}
            description='refeições fora da dieta'
            information={`${22}`}
          />
        </BlockDataWrapper>
      </OtherInformation>

      <StatusBar
        translucent={false}
        barStyle='light-content'
        backgroundColor={theme.COLORS.BROWN_700}
      />
    </Container>
  );
}

export default Statistics;