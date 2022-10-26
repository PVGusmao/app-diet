import React from 'react'
import { Container, Text, Wrapper } from './styles';
import { useNavigation } from '@react-navigation/native';

import Header from '@components/Header';
import Input from '@components/Input';
import Button from '@components/Button';

function NewMeal(){
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

    </Container>
  );
}

export default NewMeal;