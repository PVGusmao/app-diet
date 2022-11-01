import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;

  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GREEN_200};
`;

export const Body = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 20px;

  flex: 1;

  width: 100%;

  background-color: white;
`

export const Name = styled.Text`
  font-weight: 700;
  font-size: 20px;

  margin-top: 20px;
  margin-bottom: 10px;

  /* background-color: yellow; */
`

export const Description = styled.Text`
  font-weight: 400;
  font-size: 16px;

  margin-bottom: 20px;
  
  /* background-color: red; */
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  margin-bottom: 10px;
  
  /* background-color: green; */
`

export const DateAndTime = styled.Text`
  font-weight: 400;
  font-size: 16px;

  /* background-color: purple; */
`

export const Diet = styled.Text`
  margin-top: 10px;

  width: 120px;

  /* background-color: gold; */
`

export const ContainerDiet = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-evenly;

  text-align: center;

  height: 100%;
  width: 120px;
`

export const Buttons = styled.View`
  background-color: white;

  width: 100%;

  padding: 10px 20px;
`