import {StyleSheet, Dimensions} from 'react-native';
import {white} from '../../utils/colors';

const widthView = Dimensions.get('window').width;
const heightView = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    viewLabels: {
      flexDirection: 'row',
      padding: 10,
    },
    labelNameTitle: {
      width: widthView * 0.65
    },
    labelPriceTitle: {
      width: widthView * 0.2
    }
});