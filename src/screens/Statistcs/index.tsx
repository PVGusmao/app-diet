import React, { useEffect, useState } from 'react'

import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import Route from 'src/interface/route.interface';

import Header from '@components/Header';
import BlockData from '@components/BlockData';

import { BlockDataWrapper, Container, MainInformation, OtherInformation, Text } from './styles';

import Stats from 'src/interface/stats.interface';

type Props = {
  route: Route;
}

function Statistics({ route }: Props){
  const theme = useTheme();
  const navigation = useNavigation();
  const [statistic, setStatistic] = useState<Stats>({} as Stats);

  const allData: Stats = route.params;

  function handleNavigation() {
    navigation.goBack();
  }
  
  useEffect(() => {
    setStatistic(allData);
  }, [])

  return (
    <Container>
        <Header
          onPress={handleNavigation}
          inOrOutDiet={((statistic.inDietMeal * 100) / statistic.totalMeal) <= 50 ? false : true}
          showBackButton
          showProfilePicture
        />
      <MainInformation>
        <BlockData
          detailsIcon
          inOrOutDiet={((statistic.inDietMeal * 100) / statistic.totalMeal) <= 50 ? true : false}
          padding={0}
          description='das refeições dentro da dieta'
          information={`${isNaN((statistic.inDietMeal * 100) / statistic.totalMeal) ? 0 : ((statistic.inDietMeal * 100) / statistic.totalMeal).toFixed(2)}%`}
        />
      </MainInformation>
      
      <OtherInformation>
        <Text>Estatísticas Gerais</Text>
        <BlockData
          detailsIcon
          backgroundColorType='LIGHT'
          padding={20}
          description='melhor sequência de pratos dentro da dieta'
          information={`${statistic.inDietMealSequence}`}
        />

        <BlockData
          backgroundColorType='LIGHT'
          detailsIcon
          padding={20}
          description='refeições registradas'
          information={`${statistic.totalMeal ? statistic.totalMeal : 0}`}
        />


        <BlockDataWrapper>
          <BlockData
            backgroundColorType='LIGHT'
            detailsIcon
            type='SECONDARY'
            padding={20}
            description='refeições dentro da dieta'
            information={`${statistic.inDietMeal ? statistic.inDietMeal : 0}`}
          />

          <BlockData
            detailsIcon
            inOrOutDiet
            type='SECONDARY'
            padding={20}
            description='refeições fora da dieta'
            information={`${statistic.outDietMeal ? statistic.outDietMeal : 0}`}
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