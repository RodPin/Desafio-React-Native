import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {secondary, third} from '../utils/colors';
import styled from 'styled-components/native';

const MyView = styled.View`
  background-color: ${secondary};
  width: 200px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border-color: ${third};
  border-width: 2px;
  margin-top: 5px;
`;

const MyButton = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <MyView>
      <Text style={{fontSize: 17}}>{title}</Text>
    </MyView>
  </TouchableOpacity>
);

export default MyButton;
