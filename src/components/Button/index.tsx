import React from 'react'
import { TouchableHighlightProps } from 'react-native';

import { Container, Icon, Text, YesOrNoButtonTypeStyle } from './styles';

type Props = TouchableHighlightProps & {
  type?: YesOrNoButtonTypeStyle;
  title: string;
}

function Button({title, type = 'YES', ...rest}: Props){
  return (
    <Container {...rest}>
      <Icon type={type} name="dot-fill" />
      <Text>{title}</Text>
    </Container>
  );
}

export default Button;