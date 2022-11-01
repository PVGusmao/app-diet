import React, { useEffect, useState } from 'react'
import { SectionList, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Container, Text, Wrapper } from './styles';

import { getAllMeal } from '@storage/meal/getAllMeal';
import { removeAllMeal } from '@storage/meal/removeAll'
import { getStatistics } from '@storage/statistics/getStatistis';
import { getCounter } from '@storage/counter/getCounter';
import { setCounter } from '@storage/counter/setCounter';

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
  
  function handleNavigation(path: string): void {
    navigation.navigate(path, statistics)
  }

  async function getMeal() {
    const data = await getAllMeal();
    setMeal(data);
  }

  async function handleTotalMeal() {

    const counter = await getCounter();

    let total: number = 0;
    let dietMeal: number = 0;
    let outDiet: number = 0;
    let inDietMealSequence: number = counter;

    meal.forEach((element: Meal): void => {
      total += element.data.length ? element.data.length : 0;
      dietMeal += element.data.length ? (element.data.filter((item: SingleMeal) => item.dietOrNot)).length : 0;
      outDiet += element.data.length ? (element.data.filter((item: SingleMeal) => !item.dietOrNot)).length : 0;
    })

    const obj: Stats = {
      inDietMeal: dietMeal,
      inDietMealSequence: inDietMealSequence,
      outDietMeal: outDiet,
      totalMeal: total,
    }
    
    setStatistics(obj);

  }

  useEffect(() => {
    getMeal();
    handleTotalMeal();
  }, [])

  return (
    <Container>

      <Header />

      <BlockData
        onPress={() => {
          handleTotalMeal();
          handleNavigation('statistics')
        }}
        inOrOutDiet={((statistics.inDietMeal * 100) / statistics.totalMeal) <= 50 ? true : false}
        information={`${isNaN((statistics.inDietMeal * 100) / statistics.totalMeal) ? 0 : ((statistics.inDietMeal * 100) / statistics.totalMeal).toFixed(2)}%`}
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
        renderItem={(item) => (
          // console.log(item.section.date)
          <MealCard
            onPress={() => navigation.navigate('detailsScreen', item)}
            nameOfTheMEal={item.item.description}
            timeOfTheMeal={item.item.hour}
            type={item.item.dietOrNot === true ? 'DIET' : 'NOT DIET'}
          />
        )}
        renderSectionHeader={(item: any) => (
          <Text>{`${item.section.date}`}</Text>
        )}
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
          marginVertical: 20,
          paddingBottom: 50
        }}
      />

      {/* <Button onPress={
        // removeAllMeal
        // handleTotalMeal
        getCounter
      } clicked title='Push me'/> */}

      <StatusBar
        translucent={false}
        barStyle='light-content'
        backgroundColor={theme.COLORS.BROWN_700}
      />

    </Container>
  );
}

export default Home;