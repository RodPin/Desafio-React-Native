import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {secondary, third} from '../utils/colors';
import {times} from '../redux/reducers';
import {useDispatch} from 'react-redux';

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

function Circle({number, onPress}) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(times(number))}>
      <StyledCircleView>
        <BigText>{number}</BigText>
      </StyledCircleView>
    </TouchableOpacity>
  );
}

export default Circle;
