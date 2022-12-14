import React, { useState } from 'react'
import { TouchableOpacityProps } from 'react-native';

import { Container, Avatar, ButtonGetImage, Icon, Logo, BackButton, BackIcon, Title } from './styles';

import * as ImagePicker from 'expo-image-picker';

import logo from '@assets/Logo.png'; 

type Props = TouchableOpacityProps & {
  showBackButton?: boolean;
  showProfilePicture?: boolean;
  showTitle?: boolean;
  title?: string;
  inOrOutDiet? : boolean;
}

function Header({
  title,
  showTitle = false,
  showBackButton = false,
  inOrOutDiet = true,
  showProfilePicture=false,
  ...rest
}: Props){

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result?.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container inOrOutDiet={inOrOutDiet}>
      {
        showBackButton
          ? <BackButton { ...rest }>
            <BackIcon name="arrow-back" />
            {showTitle && <Title>{title}</Title>}
          </BackButton>
          : <Logo source={logo} />
      }
      {
        !showProfilePicture
          && <ButtonGetImage onPress={pickImage} >
            {
              image
              ? <Avatar source={{ uri: image }} />
              : <Icon name="person-circle-outline" />
            }
          </ButtonGetImage>
      }
    </Container>
  );
}

export default Header;