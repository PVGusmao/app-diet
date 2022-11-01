import React, { useState } from 'react'
import { Alert } from 'react-native';

import { Body, Container, Text, Wrapper, Button, TextButton } from './styles';

import { useNavigation } from '@react-navigation/native';

import { registration } from '@storage/registration/registration';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Date from 'src/interface/date.interface';
import Time from 'src/interface/time.interface';

import Header from '@components/Header';
import Input from '@components/Input';
import ButtonN from '@components/Button';
import AddMeal from '@components/AddMeal';
import { setCounter } from '@storage/counter/setCounter';

type registrationType = {
  name: string;
  description: string;
  date: string;
  hour: string;
  dietOrNot: boolean | null;
}

function NewMeal(){
  const navigation = useNavigation();

  const [isDateOrTime, setIsDateOrTime] = useState<any>('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [registrationState, setRegistrationState] = useState<registrationType>({
    name: '',
    description: '',
    date: '',
    hour: '',
    dietOrNot: null,
  })

  function showDatePicker() {
    setDatePickerVisibility(true);
  };

  function hideDatePicker() {
    setDatePickerVisibility(false);
  };

  function handleConfirmTime(time: Time): void {
    const hour = +time.getUTCHours() - 3;
    const minutes = time.getUTCMinutes();
    setRegistrationState({ ...registrationState, hour: `${hour}:${minutes}`});
    console.warn("A date has been picked: ", `${hour}:${minutes}`);
    hideDatePicker();
  };

  function handleConfirmDate(date: Date): void {
    const year = date.getFullYear();
    const month = +date.getMonth() + 1;
    const day = date.getUTCDate();
    setRegistrationState({ ...registrationState, date: `${day}/${month}/${year}`});
    console.warn("A date has been picked: ", `${day}/${month}/${year}`);
    hideDatePicker();
  };

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
        navigation.navigate(path, { dietOrNot: registrationState.dietOrNot});  
      } else {
        navigation.goBack();
      }
  }

  async function handleRegistration() {
    await setCounter(registrationState.dietOrNot)
    const stringRegistration = JSON.stringify(registrationState);


    registration(stringRegistration);
  }

  return (
    <Container>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={isDateOrTime}
        onConfirm={isDateOrTime === 'date' ? handleConfirmDate : handleConfirmTime}
        onCancel={hideDatePicker}
      />
      
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
          <Button onPress={() => {
            setIsDateOrTime('date')
            showDatePicker()
          }}>
            <TextButton>Date</TextButton>
          </Button>

          <Button onPress={() => {
            setIsDateOrTime('time')
            showDatePicker()
          }}>
            <TextButton>Time</TextButton>
          </Button>

        </Wrapper>

        <Text>Está dentro da dieta?</Text>

        <Wrapper>
          <ButtonN
            clicked={registrationState.dietOrNot ? true : ''}
            title='Sim'
            onPress={() => setRegistrationState({ ...registrationState, dietOrNot: true })}
          />

          <ButtonN
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