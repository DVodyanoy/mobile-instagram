import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles/Colors';

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: Colors.midGray,
  },
});
