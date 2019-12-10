import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const StyledCircleView = styled.View`
  background-color: #ebebe0;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  align-items: center;
  justify-content: center;
  border-color: grey;
  border-width: 4px;
`;

const BigText = styled.Text`
  font-size: 50px;
`;

const Circle = ({number, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <StyledCircleView>
      <BigText>{number}</BigText>
    </StyledCircleView>
  </TouchableOpacity>
);

export default Circle;
