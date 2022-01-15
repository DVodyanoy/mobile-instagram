import {IHistory} from './types/HistoryTypes';
import {Dimensions} from 'react-native';

export const textEllipsis = (text: string, length: number) => {
  if (text.length <= length) {
    return text;
  }
  return text.substr(0, length) + '...';
};

export const historySort = (history: IHistory[]) => {
  return history.sort((a, b) => Number(b.active) - Number(a.active));
};

export const getScreenWidth = () => Dimensions.get('window').width;
