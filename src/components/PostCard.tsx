import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AgEnum, Text} from './ui/Text';
import IconSvgMore from '../assets/icons/IconSvgMore';
import IconSvgHeart from '../assets/icons/IconSvgHeart';
import IconSvgComment from '../assets/icons/IconSvgComment';
import IconSvgShare from '../assets/icons/IconSvgShare';
import IconSvgBookmark from '../assets/icons/IconSvgBookmark';
import {IPostTypes} from '../types/PostTypes';

export const PostCard = (data: IPostTypes) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Image style={styles.avatar} source={{uri: data.postOwnerAvatar}} />
          <Text Ag={AgEnum.TITLE} style={{marginLeft: 9}}>
            {data.postOwnerName}
          </Text>
        </View>

        <TouchableOpacity>
          <IconSvgMore />
        </TouchableOpacity>
      </View>

      <View style={styles.photoContainer}>
        <Image style={styles.photo} source={{uri: data.photo}} />
      </View>

      <View style={styles.container}>
        <View style={styles.flexRow}>
          <TouchableOpacity style={{marginLeft: 3}}>
            <IconSvgHeart valueOf={false} />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 12}}>
            <IconSvgComment />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 12}}>
            <IconSvgShare />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <IconSvgBookmark />
        </TouchableOpacity>
      </View>

      <Text style={{marginLeft: 12}} Ag={AgEnum.TITLE}>
        {data.likesCount} Likes
      </Text>

      <View>
        <Text numberOfLines={2} style={{marginLeft: 12}} Ag={AgEnum.MAIN}>
          <Text Ag={AgEnum.TITLE}>{data.commentOwnerName} </Text>
          {data.comment}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 9,
    paddingRight: 16,
    paddingVertical: 10,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  photoContainer: {},
  photo: {
    width: '100%',
    height: 375,
  },
});
