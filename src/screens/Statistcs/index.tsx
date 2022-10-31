import React, { useEffect } from 'react'

import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import Route from 'src/interface/route.interface';

import Header from '@components/Header';
import BlockData from '@components/BlockData';

import { BlockDataWrapper, Container, MainInformation, OtherInformation, Text } from './styles';

import Stats from 'src/interface/stats.interface';
import Middle from 'src/interface/middleStats.interface';

type Props = {
  route: Route;
}

function Statistics({ route }: Props){
  const theme = useTheme();
  const navigation = useNavigation();

  const statistic: Stats = route.params;

  function handleNavigation() {
    navigation.goBack();
  }
  
  useEffect(() => {
    console.log(statistic)
  }, [])

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
          information={`${((statistic.inDietMeal) * 100) / statistic.totalMeal}%`}
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
          information={`${statistic.totalMeal}`}
        />


        <BlockDataWrapper>
          <BlockData
            backgroundColorType='LIGHT'
            detailsIcon
            type='SECONDARY'
            padding={20}
            description='refeições dentro da dieta'
            information={`${statistic.inDietMeal}`}
          />

          <BlockData
            detailsIcon
            type='SECONDARY'
            padding={20}
            description='refeições fora da dieta'
            information={`${statistic.outDietMeal}`}
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