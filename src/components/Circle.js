import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {secondary, third} from '../utils/colors';

const StyledCircleView = styled.View`
  background-color: ${secondary};
  width: 200px;
  height: 200px;
  border-radius: 200px;
  align-items: center;
  justify-content: center;
  border-color: ${third};
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
