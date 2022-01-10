import React from 'react';
import IconSvgLogo from '../assets/icons/IconSvgLogo';
import IconSvgHeart from '../assets/icons/IconSvgHeart';
import IconSvgMessenger from '../assets/icons/IconSvgMessenger';
import IconSvgAdd from '../assets/icons/IconSvgAdd';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AgEnum, Text} from '../components/ui/Text';
import {PostCard} from '../components/PostCard';
import {Divider} from '../components/ui/Divider';
import {HistoryData} from '../mocks/HistoryData';
import {Colors} from '../styles/Colors';
import {historySort, textEllipsis} from '../helper';
import {IHistory} from '../types/HistoryTypes';
import {PostsData} from '../mocks/PostsData';
import {IPostTypes} from '../types/PostTypes';

export const HomeScreen = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <IconSvgLogo />
        <View style={styles.icons}>
          <TouchableOpacity style={{marginRight: 20}}>
            <IconSvgAdd />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20}}>
            <IconSvgHeart />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSvgMessenger />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.historyItemContainer}>
          {historySort(HistoryData).map((item: IHistory, idx) => (
            <View
              key={item.id}
              style={[{marginRight: 16}, idx === 0 && {marginLeft: 10}]}>
              <TouchableOpacity
                style={[
                  styles.historyItem,
                  item.active
                    ? styles.historyItemActive
                    : styles.historyItemInactive,
                ]}>
                <Image
                  style={styles.history}
                  source={{
                    uri: item.avatar,
                  }}
                />
              </TouchableOpacity>
              <Text Ag={AgEnum.SUBTITLE} align="center">
                {textEllipsis(item.name, 12)}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Divider />

        {PostsData.map((item: IPostTypes) => (
          <PostCard key={item.id} {...item} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 6,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyItemContainer: {
    marginTop: 16,
    marginBottom: 6,
  },
  history: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  historyItem: {
    height: 66,
    width: 66,
    borderRadius: 66,
    borderWidth: 3,
  },
  historyItemActive: {
    borderColor: Colors.red,
  },
  historyItemInactive: {
    borderColor: Colors.midGray,
  },
});
