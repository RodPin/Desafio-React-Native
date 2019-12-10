import React from 'react';
import MainView from '../components/MainView';
import BigText from '../components/BigText';
import MyButton from '../components/MyButton';
import {View} from 'react-native';

function result({navigation}) {
  return (
    <MainView>
      <BigText>Seu Produto é </BigText>
      <BigText>4</BigText>
      <View style={{marginTop: 40}}>
        <MyButton
          onPress={() => navigation.navigate({routeName: 'last'})}
          title="Abrir em nova janela"></MyButton>
        <MyButton title="Zerar"></MyButton>
      </View>
    </MainView>
  );
}

export default result;
