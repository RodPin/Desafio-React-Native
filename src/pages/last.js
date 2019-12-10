import React from 'react';
import {StyleSheet} from 'react-native';
import MainView from '../components/MainView';
import BigText from '../components/BigText';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import Syringe from '../utils/Syringe.json';

function Last() {
  const result = useSelector(state => state.result);
  return (
    <MainView>
      <BigText>Seu Produto final foi {result}. Parabens! </BigText>
      <LottieView
        source={Syringe}
        autoPlay
        loop
        style={styles.size}></LottieView>
    </MainView>
  );
}

const styles = StyleSheet.create({
  size: {width: 320, height: 320},
});

export default Last;
