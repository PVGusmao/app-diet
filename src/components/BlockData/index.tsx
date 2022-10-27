import React from 'react'
import { TouchableOpacityProps } from 'react-native';

import { BlockBackColorTypeStyle, BlockDataTypeStyle, Button,
  Container, Description, DetailsButton, DetailsIcon,
  Information, PaddingTypeStyleContainer } from './styles';

type Props = TouchableOpacityProps & {
  information: string,
  description: string,
  detailsIcon?: boolean,
  type?: BlockDataTypeStyle,
  padding?: PaddingTypeStyleContainer,
  backgroundColorType?: BlockBackColorTypeStyle,
}

function BlockData({
  backgroundColorType = 'LIGHT',
  type = 'PRIMARY',
  padding = 20,
  information,
  description,
  detailsIcon = false,
  ...rest
}: Props) {
  return (
    <Container
      backgroundColorType={backgroundColorType}
      type={type}
      padding={padding}
      { ...rest }
    >
      <Button>
        {
          !detailsIcon &&
          <DetailsButton { ...rest }>
            <DetailsIcon
              detailsIcon={detailsIcon}
              name='arrow-up-right'
            />
          </DetailsButton>
        }
        <Information>{ information }</Information>
        <Description>{ description }</Description>
      </Button>
    </Container>
  );
}

export default BlockData;