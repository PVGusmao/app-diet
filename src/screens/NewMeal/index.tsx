import React, { useState } from 'react'
import { Alert } from 'react-native';

import { Body, Container, Text, Wrapper } from './styles';

import { useNavigation } from '@react-navigation/native';

import Header from '@components/Header';
import Input from '@components/Input';
import Button from '@components/Button';
import AddMeal from '@components/AddMeal';

function NewMeal(){
  const navigation = useNavigation();

  const [registration, setRegistration] = useState({
    name: '',
    description: '',
    data: '',
    hour: '',
    dietOrNot: false,
  })
  const [back, setBack] = useState(false);

  function handleNavigation(path?: any) {
      if (path.length) {
        if (!registration.name.length || !registration.description.length 
          || !registration.data.length || !registration.hour.length) {
            Alert.alert('Cadastro', 'Preencha corretamente o formulário');
            return
          }
        navigation.navigate(path);  
      } else {
        navigation.goBack();
      }
  }

  console.log(registration)

  return (
    <Container>
      
      <Header
        onPress={ handleNavigation }
        showBackButton
        showProfilePicture
        showTitle
        title='Nova Refeição'
      />

      <Body>
        <Input
          placeholder='Digite o nome'
          value={registration.name}
          onChangeText={(text: string) => setRegistration({ ...registration, name: text})}
        />
        
        <Input
          placeholder='Descrição'
          multiline={true}
          height={150}
          value={registration.description}
          textAlignVertical='top'
          onChangeText={(text: string) => setRegistration({ ...registration, description: text})}
        />
        
        <Wrapper>
          <Input
            placeholder='Data'
            size='HALF'
            value={registration.data}
            onChangeText={(text: string) => setRegistration({ ...registration, data: text})}
          />

          <Input
            placeholder='Hora'
            size='HALF'
            value={registration.hour}
            onChangeText={(text: string) => setRegistration({ ...registration, hour: text})}
          />
        </Wrapper>

        <Text>Está dentro da dieta?</Text>

        <Wrapper>
          <Button
            clicked={registration.dietOrNot ? true : ''}
            title='Sim'
            onPress={() => setRegistration({ ...registration, dietOrNot: true})}
          />

          <Button
            clicked={!registration.dietOrNot ? false : ''}
            title='Não'
            type='NO'
            onPress={() => setRegistration({ ...registration, dietOrNot: false})}
          />
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