import React from 'react'
import { TouchableHighlightProps } from 'react-native';

import { Container, Icon, Text, YesOrNoButtonTypeStyle } from './styles';

type Props = TouchableHighlightProps & {
  type?: YesOrNoButtonTypeStyle;
  title: string;
  clicked: string | boolean;
}

function Button({clicked, title, type = 'YES', ...rest}: Props){
  return (
    <Container clicked={clicked} {...rest}>
      <Icon type={type} name="dot-fill" />
      <Text>{title}</Text>
    </Container>
  );
}

export default Button;