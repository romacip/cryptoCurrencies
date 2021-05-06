import {StyleSheet, Dimensions} from 'react-native';
import {white} from '../../utils/colors';

const widthView = Dimensions.get('window').width;
const heightView = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    header: {
      height: heightView * 0.08,
      backgroundColor: 'red',
      flexDirection: 'row'
    },
    marketSnapshot: {
      backgroundColor: 'blue',
      height: heightView * 0.04,
    },
    textColormarketSnapshot: {
      color: white,
    },
    viewLabels: {
      flexDirection: 'row',
    }
});