import { Dimensions, Platform } from 'react-native';

export const OS = Platform.OS === 'android' ? 'android' : 'ios';
const { width, height } = Dimensions.get('screen');

export default {
  device: {
    width,
    height
  },
  defaultOpacity: 0.9,
  font: {
    types: {
      thin: '200',
      regular: '400',
      bold: '600'
    },
    size: {
      header: 24,
      regular: 16,
      description: 14
    }
  },
  colors: {
    background: '#F8F8F8',
    green: {
      gradient: '#00BFB2',
      increase: '#10DC78',
      navbar: '#00BDB0',
      shadow: '#00FFEE'
    },
    red: {
      decrease: '#F15950'
    },
    purple: {
      gradient: '#900271',
      shadow: '#D402A6'
    },
    gray: {
      navbar: '#B3B4B8',
      coinDesc: '#7C7070',
      gradient: '#D6D7D8'
    },
    black: {
      classic: '#000000',
      text: '#141B29'
    },
    white: '#FFFFFF',
    transparent: 'rgba(0, 0, 0, 0.1)'
  },
  borders: {
    width: {
      narrow: 0.3,
      thin: 0.7,
      regular: 1,
      thick: 1.5
    },
    radius: {
      circle: 100,
      button: 20,
      card: 12,
      sqBtn: 7
    }
  }
};
