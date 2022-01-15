import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../../screens/Screens';
import {HomeScreen} from '../../screens/HomeScreen';
import {SearchScreen} from '../../screens/SearchScreen';
import IconSvgHome from '../../assets/icons/IconSvgHome';
import IconSvgSearch from '../../assets/icons/IconSvgSearch';
import IconSvgReels from '../../assets/icons/IconSvgReels';
import {ReelsScreen} from '../../screens/ReelsScreen';
import {ActionsScreen} from '../../screens/ActionsScreen';
import IconSvgHeart from '../../assets/icons/IconSvgHeart';
import {ProfileScreen} from '../../screens/ProfileScreen';
import {IconPngProfile} from '../../assets/icons/IconPngProfile';

export const BottomTab = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <IconSvgHome valueOf={focused} />,
        }}
      />
      <Screen
        name={Screens.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => <IconSvgSearch valueOf={focused} />,
        }}
      />
      <Screen
        name={Screens.REELS}
        component={ReelsScreen}
        options={{
          tabBarIcon: ({focused}) => <IconSvgReels valueOf={focused} />,
        }}
        //TODO: Если рилс активен - менять иконки на белые, футер - черный (пример инста)
      />
      <Screen
        name={Screens.ACTIONS}
        component={ActionsScreen}
        options={{
          tabBarIcon: ({focused}) => <IconSvgHeart valueOf={focused} />,
        }}
      />
      <Screen
        name={Screens.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconPngProfile
              avatarPath={
                'https://i.pinimg.com/564x/0c/e0/d6/0ce0d6666c8592d209fe4b0d4d8e9ddd.jpg'
              }
              isActive={focused}
            />
          ),
        }}
      />
    </Navigator>
  );
};
