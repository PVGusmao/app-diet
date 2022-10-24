import React, { useState } from 'react'

import { Container, Avatar, ButtonGetImage, Icon, Logo } from './styles';

import * as ImagePicker from 'expo-image-picker';
import logo from '@assets/Logo.png'; 

function Header(){

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
    <Container>
      <Logo source={logo} />
      <ButtonGetImage onPress={pickImage} >
      {
        image
        ? <Avatar source={{ uri: image }} style={{ width: 200, height: 200 }} />
        : <Icon name="person-circle-outline" />
      }
      </ButtonGetImage>
    </Container>
  );
}

export default Header;