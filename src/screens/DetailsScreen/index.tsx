import Header from '@components/Header';
import React from 'react'

import { useNavigation } from '@react-navigation/native';

import { Body, Buttons, Container, ContainerDiet, DateAndTime, Description, Diet, Name, Title } from './style';

import { Octicons } from '@expo/vector-icons';
import AddMeal from '@components/AddMeal';

function DetailsScreen({ route }: any){
  const data = route.params;
  const navigation = useNavigation();

  console.log(data);

  return (
    <Container>

      <Header
        onPress={() => {navigation.goBack()}}
        inOrOutDiet={data.inDietOrNot ? false : true}
        showBackButton
        showProfilePicture
      />

      <Body>
        <Name>
          {data.item.name}
        </Name>
        
        <Description>
          {data.item.description}
        </Description>
        
        <Title>Data e hora</Title>
        <DateAndTime>
          {data.item.hour.split(':')[1] === '0' ? data.section.date + ' às ' + data.item.hour + '0': data.section.date + ' ' + data.item.hour}
        </DateAndTime>

        <Diet>
          {!data.item.inDietOrNot
            ? <ContainerDiet>
                <Octicons name="dot-fill" size={24} color="green" />
                <Title>dentro da dieta</Title>
              </ContainerDiet>
            : <ContainerDiet>
                <Octicons name="dot-fill" size={24} color="red" />
                <Title>fora da dieta</Title>
              </ContainerDiet>
          }
        </Diet>

      </Body>
        <Buttons>
          <AddMeal
            title='Editar Refeição'
            showIcon={false}
            filled
          />
          
          <AddMeal
            title='Excluir Refeição'
            showIcon={false}
          />
        </Buttons>
    </Container>
  );
}

export default DetailsScreen;