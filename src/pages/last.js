import React from 'react';
import MainView from '../components/MainView';
import BigText from '../components/BigText';
import {useSelector} from 'react-redux';

function Last() {
  const result = useSelector(state => state.result);
  return (
    <MainView>
      <BigText>Seu Produto final foi {result}. Parabens! </BigText>
    </MainView>
  );
}

export default Last;
