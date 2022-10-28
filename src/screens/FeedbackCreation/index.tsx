import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import feedbackNeg from '@assets/feedbackNeg.png';
import feedbackPos from '@assets/feedbackPos.png';

import { Container, Image, SubTitle, Title, Wrapper } from './styles';

import AddMeal from '@components/AddMeal';
import { getAllRegistration } from '@storage/registration/getAllRegistration';
import { mealCreate } from '@storage/meal/mealCreate';
import { getAllMeal } from '@storage/meal/getAllMeal';

type Props = {
  route: any;
}

function FeebackCreation({ route }: Props) {
  const navigation = useNavigation();
  const { dietOrNot } = route.params;

  function handleNavigation(path: any) {
    if (path) {
      navigation.navigate(path);
    } else {
      navigation.goBack();
    }
  }

  async function getRegistration() {
    const data = await getAllRegistration();
    
    await mealCreate(data);

    const response = await getAllMeal();
    
    console.log(response);
  }

  useEffect(() => {
    getRegistration();
  }, [])

  console.log(dietOrNot);

  return (
    <Container>
      <Title>{dietOrNot ? 'Continue Assim!' : 'Que Pena!'}</Title>
      <SubTitle>
        {
          dietOrNot
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
        }
      </SubTitle>
      <Image source={dietOrNot ? feedbackPos : feedbackNeg} />

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