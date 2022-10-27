import React, { useState } from 'react'
import { Alert } from 'react-native';

import { Body, Container, Text, Wrapper } from './styles';

import { useNavigation } from '@react-navigation/native';

import { registration } from '@storage/registration/registration';

import Header from '@components/Header';
import Input from '@components/Input';
import Button from '@components/Button';
import AddMeal from '@components/AddMeal';

type registrationType = {
  name: string;
  description: string;
  date: string;
  hour: string;
  dietOrNot: boolean | null;
}

function NewMeal(){
  const navigation = useNavigation();

  const [registrationState, setRegistrationState] = useState<registrationType>({
    name: '',
    description: '',
    date: '',
    hour: '',
    dietOrNot: null,
  })

  function handleNavigation(path?: any) {
      if (path.length) {
        if (
          !registrationState.name.length
          || !registrationState.description.length 
          || !registrationState.date.length
          || !registrationState.hour.length
          || registrationState.dietOrNot === null
        ) {
            Alert.alert('Cadastro', 'Preencha corretamente o formulário');
            return
          }
        navigation.navigate(path);  
      } else {
        navigation.goBack();
      }
  }

  function handleRegistration() {
    const stringRegistration = JSON.stringify(registrationState);

    registration(stringRegistration);
  }

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
          value={registrationState.name}
          onChangeText={(text: string) => setRegistrationState({ ...registrationState, name: text})}
        />
        
        <Input
          placeholder='Descrição'
          multiline={true}
          height={150}
          value={registrationState.description}
          textAlignVertical='top'
          onChangeText={(text: string) => setRegistrationState({ ...registrationState, description: text})}
        />
        
        <Wrapper>
          <Input
            placeholder='Data'
            size='HALF'
            value={registrationState.date}
            onChangeText={(text: string) => setRegistrationState({ ...registrationState, date: text})}
          />

          <Input
            placeholder='Hora'
            size='HALF'
            value={registrationState.hour}
            onChangeText={(text: string) => setRegistrationState({ ...registrationState, hour: text})}
          />
        </Wrapper>

        <Text>Está dentro da dieta?</Text>

        <Wrapper>
          <Button
            clicked={registrationState.dietOrNot ? true : ''}
            title='Sim'
            onPress={() => setRegistrationState({ ...registrationState, dietOrNot: true })}
          />

          <Button
            clicked={!registrationState.dietOrNot ? false : ''}
            title='Não'
            type='NO'
            onPress={() => setRegistrationState({ ...registrationState, dietOrNot: false})}
          />
        </Wrapper>

        <Wrapper>
          <AddMeal
            onPress={() =>{ 
              handleRegistration();
              handleNavigation('feedbackCreation');
            }}
            title='Cadastrar Refeição'
            showIcon={false}
          />
        </Wrapper>
      </Body>
    </Container>
  );
}

export default NewMeal;