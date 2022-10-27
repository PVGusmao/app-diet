import { SectionList, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Container, Text, Wrapper } from './styles';

import { getAllMeal } from '@storage/meal/getAllMeal';
import { removeAllMeal } from '@storage/meal/removeAll'

import Header from '@components/Header';
import BlockData from '@components/BlockData';
import AddMeal from '@components/AddMeal';
import MealCard from '@components/MealCard';
import Button from '@components/Button';

function Home(){
  const theme = useTheme();
  const navigation = useNavigation();

  const [today, setToday] = useState('');
  const [meal, setMeal] = useState([]);
  
  function handleNavigation(path: any) {
    navigation.navigate(path)
  }

  function getDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const actualDate = `${day}/${month}/${year}`;

    setToday(actualDate);
  }

  async function getMeal() {
    const data = await getAllMeal();
    setMeal(data);
  }

  useEffect(() => {
    getMeal();
  }, [])

  return (
    <Container>

      <Header />

      <BlockData
        onPress={() => handleNavigation('statistics')}
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
            nameOfTheMEal={'item.name'}
            timeOfTheMeal={'item.time'}
            type={item.dietOrNot === true ? 'DIET' : 'NOT DIET'}
          />
        )}
        renderSectionHeader={() => (
          <Text>{'date'}</Text>
        )}
        contentContainerStyle={{ width: '85%', marginVertical: 10 }}
      />
      
      <Button onPress={removeAllMeal} clicked title='Push me'/>

      <StatusBar
        translucent={false}
        barStyle='light-content'
        backgroundColor={theme.COLORS.BROWN_700}
      />

    </Container>
  );
}

export default Home;