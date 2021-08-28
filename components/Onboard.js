import React from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';

const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('../assets/images/Onboard1.png'),
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('../assets/images/Onboard2.png'),
  },
  {
    title: 'Spend more time doing the things you love',
    text: 'Get started within five minutes',
    image: require('../assets/images/Onboard3.png'),
  },
];

const Onboard = props => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.image} source={item.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text onPress={props.markAsDone} style={styles.rightText}>
          Done
        </Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent"></StatusBar>
      <AppIntroSlider
        keyExtractor={item => item.title}
        renderItem={renderItem}
        data={data}
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
        renderDoneButton={renderDoneButton}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        showPrevButton
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginBottom: 30,
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 60,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 60,
    marginTop: 20,
    color: colors.grey,
  },
  leftTextWrapper: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.blue,
    marginLeft: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  leftText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  rightTextWrapper: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.blue,
    marginRight: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  rightText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
});

export default Onboard;
