import React from 'react';
import MainView from '../components/MainView';
import BigText from '../components/BigText';
import MyButton from '../components/MyButton';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {reset} from '../redux/reducers';

function result({navigation}) {
  const result = useSelector(state => state.result);
  const dispatch = useDispatch();
  return (
    <MainView>
      <BigText>Seu Produto é </BigText>
      <BigText>{result}</BigText>
      <View style={{marginTop: 40}}>
        <MyButton
          onPress={() => navigation.navigate({routeName: 'last'})}
          title="Abrir em nova janela"></MyButton>
        <MyButton onPress={() => dispatch(reset())} title="Zerar"></MyButton>
      </View>
    </MainView>
  );
}

export default result;
