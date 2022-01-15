import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../screens/Screens';
import {BottomTab} from '../tabs/BottomTab';

export const AppStack = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={Screens.BOTTOM} component={BottomTab} />
    </Navigator>
  );
};
