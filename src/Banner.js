/* @flow */

import React from 'react';

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <Text style={styles.title}>React Navigation... more examples</Text>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});
