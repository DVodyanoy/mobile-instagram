import React from 'react';
import {View} from 'react-native';
import {AgEnum, Text} from '../components/ui/Text';

export const ProfileScreen = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text Ag={AgEnum.TITLE}>PROFILE</Text>
    </View>
  );
};
