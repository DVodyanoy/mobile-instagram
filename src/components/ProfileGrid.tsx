import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getScreenWidth} from '../helper';

export const ProfileGrid = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {[...Array(33)].map((_, idx) => (
          <TouchableOpacity key={idx}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://c4.wallpaperflare.com/wallpaper/714/525/276/madagascar-3-mort-wallpaper-preview.jpg',
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: getScreenWidth() * 0.33,
    height: getScreenWidth() * 0.33,
    marginTop: getScreenWidth() * 0.003,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
