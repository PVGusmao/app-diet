import React from 'react'
import { useNavigation } from '@react-navigation/native';

import feedbackNeg from '@assets/feedbackNeg.png';
import feedbackPos from '@assets/feedbackPos.png';

import { Container, Image, SubTitle, Title, Wrapper } from './styles';

import AddMeal from '@components/AddMeal';
import { getAllRegistration } from '@storage/registration/getAllRegistration';

type Props = {
  onDiet: boolean;
}

function FeebackCreation({onDiet}: Props) {
  const navigation = useNavigation();

  function handleNavigation(path: any) {
    if (path) {
      navigation.navigate(path);
    } else {
      navigation.goBack();
    }
  }

  async function getRegistration() {
    const data = await getAllRegistration()
    console.log(data);
  }

  getRegistration();

  return (
    <Container>
      <Title>{onDiet ? 'Continue Assim!' : 'Que Pena!'}</Title>
      <SubTitle>
        {
          onDiet
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
        }
      </SubTitle>
      <Image source={onDiet ? feedbackPos : feedbackNeg} />

      <Wrapper>
        <AddMeal
          title='Ir para página inicial'
          showIcon={false}
          onPress={() => handleNavigation('home')}
        />
      </Wrapper>
    </Container>
  );
}

export default FeebackCreation;