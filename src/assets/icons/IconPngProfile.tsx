import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';

interface IProps {
  avatarPath: string;
  isActive: boolean;
}

export const IconPngProfile = ({avatarPath, isActive}: IProps) => {
  return (
    <Image
      style={isActive ? styles.imageActive : styles.image}
      source={{uri: avatarPath}}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 27,
    height: 27,
    borderRadius: 50,
  },
  imageActive: {
    width: 27,
    height: 27,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.black,
  },
});
