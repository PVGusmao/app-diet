import { FlatList, SectionList, StatusBar, Text } from 'react-native';

import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components';

import { Container } from './styles';

import Header from '@components/Header';
import BlockData from '@components/BlockData';
import AddMeal from '@components/AddMeal';
import MealCard from '@components/MealCard';

function Home(){
  const theme = useTheme();

  const [today, setToday] = useState('');

  const [meal, setMeal] = useState([{
    title: today,
    data: [{
      name: 'Pão, presunto e queijo muzzarella',
      time: '20:00',
      dietOrNot: true,
    },
    {
      name: 'Pão, presunto e queijo muzzarella',
      time: '20:00',
      dietOrNot: true,
    }]
  }]);

  function getDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const actualDate = `${day}/${month}/${year}`;

    setToday(actualDate);
  }

  useEffect(() => {
    getDate();
  }, [])

  return (
    <Container>

      <Header />

      <BlockData
        information={`${90.86}%`}
        description='das refeições dentro da dieta'
      />

      <AddMeal />

      {/* <FlatList
        data={meal}
        keyExtractor={item => item.name}
        renderItem={(item) => (
          <MealCard
            nameOfTheMEal={item.item.name}
            timeOfTheMeal={item.item.time}
            type={item.item.dietOrNot === true ? 'DIET' : 'NOT DIET'}
          />
        )}
        contentContainerStyle={{ width: '85%' }}
      /> */}

      <SectionList
        sections={meal}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <MealCard
            nameOfTheMEal={item.name}
            timeOfTheMeal={item.time}
            type={item.dietOrNot === true ? 'DIET' : 'NOT DIET'}
          />
        )}
        renderSectionHeader={() => (
          <Text >{today}</Text>
        )}
        contentContainerStyle={{ width: '85%', marginVertical: 10 }}
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