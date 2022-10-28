import React, { useEffect, useState } from 'react'
import { SectionList, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Container, Text, Wrapper } from './styles';

import { getAllMeal } from '@storage/meal/getAllMeal';
import { removeAllMeal } from '@storage/meal/removeAll'
import { getStatistics } from '@storage/statistics/getStatistis';

import Header from '@components/Header';
import BlockData from '@components/BlockData';
import AddMeal from '@components/AddMeal';
import MealCard from '@components/MealCard';
import Button from '@components/Button';

function Home(){
  const theme = useTheme();
  const navigation = useNavigation();

  const [meal, setMeal] = useState([]);
  const [statistics, setStatistics] = useState({
    inDietMealSequence: 0,
    totalMeal: 0,
    inDietMeal: 0,
    outDietMeal: 0,
  });
  
  function handleNavigation(path: any) {
    navigation.navigate(path, { statistics })
  }

  async function getMeal() {
    const data = await getAllMeal();
    setMeal(data);
  }

  function handleTotalMeal() {

    // setStatistics({ ...statistics, totalMeal: meal.length })

    // const dietMeal = meal.reduce((acc, curr: any) => {
    //   return acc + curr.data.filter((element: any) => element.dietOrNot).length
    // }, 0);
    // setStatistics({ ...statistics, inDietMeal: dietMeal });

    // const outDiet = meal.reduce((acc, curr: any) => {
    //   return acc + curr.data.filter((element: any) => !element.dietOrNot).length
    // }, 0);
    // setStatistics({ ...statistics, outDietMeal: outDiet }),

    console.log(meal.length);
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