import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getScreenWidth} from '../helper';

export const SearchScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.smallAndHighImageContainer}>
        <View style={styles.fourImageContainer}>
          {[...Array(4)].map((_, idx) => (
            <TouchableOpacity key={idx}>
              <Image
                style={styles.smallImage}
                source={{
                  uri: 'https://c4.wallpaperflare.com/wallpaper/714/525/276/madagascar-3-mort-wallpaper-preview.jpg',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity>
          <Image
            style={styles.highImage}
            source={{
              uri: 'https://c4.wallpaperflare.com/wallpaper/714/525/276/madagascar-3-mort-wallpaper-preview.jpg',
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.allSmallImageContainer}>
        {[...Array(6)].map((_, idx) => (
          <TouchableOpacity key={idx}>
            <Image
              style={styles.smallImage}
              source={{
                uri: 'https://ru-static.z-dn.net/files/d4d/d05412c96065dda867a847881a34679b.jpg',
              }}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.smallAndHighImageContainer}>
        <TouchableOpacity>
          <Image
            style={styles.highImage}
            source={{
              uri: 'https://pikuco.ru/upload/test_stable/83e/83e2c75b1d15398fb7a5b3020704cd33.jpg',
            }}
          />
        </TouchableOpacity>
        <View style={styles.fourImageContainer}>
          {[...Array(4)].map((_, idx) => (
            <TouchableOpacity key={idx}>
              <Image
                style={styles.smallImage}
                source={{
                  uri: 'https://pikuco.ru/upload/test_stable/83e/83e2c75b1d15398fb7a5b3020704cd33.jpg',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fourImageContainer: {
    width: getScreenWidth() * 0.666,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  smallImage: {
    width: getScreenWidth() * 0.33,
    height: getScreenWidth() * 0.33,
    marginTop: getScreenWidth() * 0.0036,
  },
  highImage: {
    width: getScreenWidth() * 0.33,
    height: getScreenWidth() * 0.664,
    marginTop: getScreenWidth() * 0.003,
  },
  allSmallImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  smallAndHighImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
