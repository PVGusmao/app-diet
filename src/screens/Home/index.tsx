import React, { useEffect, useState } from 'react'
import { SectionList, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Container, Text, Wrapper } from './styles';

import { getAllMeal } from '@storage/meal/getAllMeal';
import { removeAllMeal } from '@storage/meal/removeAll'
import { getStatistics } from '@storage/statistics/getStatistis';

import Meal from 'src/interface/meal.interface';
import Stats from 'src/interface/stats.interface';
import SingleMeal from 'src/interface/singleMeal.interface';

import Header from '@components/Header';
import BlockData from '@components/BlockData';
import AddMeal from '@components/AddMeal';
import MealCard from '@components/MealCard';
import Button from '@components/Button';

function Home(){
  const theme = useTheme();
  const navigation = useNavigation();

  const [meal, setMeal] = useState<Meal[] | any>([]);
  const [statistics, setStatistics] = useState<Stats>({} as Stats);
  
  function handleNavigation(path: any) {
    navigation.navigate(path, statistics)
  }

  async function getMeal() {
    const data = await getAllMeal();
    setMeal(data);
  }

  function handleTotalMeal() {
    // Total Meal

    const total: any = meal.reduce((acc: Meal, curr: Meal): any => {
      const value: number = acc.data.length + curr.data.length;

      return value;
    })

    const dietMeal: number = meal.reduce((acc: number, curr: Meal | any): number => {
      return acc + curr.data.filter((element: SingleMeal) => element.dietOrNot).length
    }, 0);

    const outDiet: number = meal.reduce((acc: number, curr: Meal | any): number => {
      return acc + curr.data.filter((element: SingleMeal) => !element.dietOrNot).length
    }, 0);

    const obj: Stats = {
      inDietMeal: dietMeal,
      inDietMealSequence: 0,
      outDietMeal: outDiet,
      totalMeal: total,
    }

    setStatistics(obj);

    console.log(obj);
  }

  useEffect(() => {
    getMeal();
  }, [meal])

  return (
    <Container>

      <Header />

      <BlockData
        onPress={() => {
          handleTotalMeal();
          handleNavigation('statistics')
        }}
        information={`${90.86}%`}
        description='das refeições dentro da dieta'
      />

      <Wrapper>
        <AddMeal
          onPress={() => handleNavigation('newMeal')}
          title='Nova Refeição'
        />
      </Wrapper>

      <SectionList
        sections={meal}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <MealCard
            nameOfTheMEal={item.description}
            timeOfTheMeal={item.hour}
            type={item.dietOrNot === true ? 'DIET' : 'NOT DIET'}
          />
        )}
        renderSectionHeader={(item: any) => (
          <Text>{`${item.section.date}`}</Text>
        )}
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
          marginVertical: 10,
          paddingBottom: 50
        }}
      />

      <Button onPress={
        // removeAllMeal
        handleTotalMeal
      } clicked title='Push me'/>

      <StatusBar
        translucent={false}
        barStyle='light-content'
        backgroundColor={theme.COLORS.BROWN_700}
      />

    </Container>
  );
}

export default Home;