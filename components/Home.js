import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View>
      <Text>Home page</Text>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  doneButtonWrapper: {},
  doneButtonText: {},
});

export default Home;
