import React from 'react'
import { Container, Text } from './styles';
import { useNavigation } from '@react-navigation/native';

import Header from '@components/Header';
import Input from '@components/Input';

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
      <Input name='Nome' />
    </Container>
  );
}

export default NewMeal;