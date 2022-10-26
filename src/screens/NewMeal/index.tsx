import React from 'react'
import { Body, Container, Text, Wrapper } from './styles';
import { useNavigation } from '@react-navigation/native';

import Header from '@components/Header';
import Input from '@components/Input';
import Button from '@components/Button';
import AddMeal from '@components/AddMeal';

function NewMeal(){
  const navigation = useNavigation();

  function handleNavigation(path: any) {
    if (path.length) {
      navigation.navigate(path);  
    } else {
      navigation.goBack();
    }
  }

  return (
    <Container>
      <Header
        onPress={handleNavigation}
        showBackButton
        showProfilePicture
        showTitle
        title='Nova Refeição'
      />
      <Body>
        <Input
          placeholder='Digite o nome'
        />
        
        <Input
          placeholder='Descrição'
          multiline={true}
          height={150}
          textAlignVertical='top'
        />
        
        <Wrapper>
          <Input placeholder='Data' size='HALF' />
          <Input placeholder='Hora' size='HALF' />
        </Wrapper>

        <Text>Está dentro da dieta?</Text>

        <Wrapper>
          <Button title='Sim' />
          <Button title='Não' type='NO' />
        </Wrapper>

        <Wrapper>
          <AddMeal
            onPress={() => handleNavigation('feedbackCreation')}
            title='Cadastrar Refeição'
            showIcon={false}
          />
        </Wrapper>
      </Body>
    </Container>
  );
}

export default NewMeal;