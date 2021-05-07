import {StyleSheet, Dimensions} from 'react-native';
import {white} from '../../utils/colors';

const widthView = Dimensions.get('window').width;
const heightView = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    bodyRow: {
      width: widthView * 0.5,
    },
    fontBold: {
      fontWeight: 'bold',
    },
    labelDescription: {
      fontWeight: 'bold',
      color: 'gray',
    },
    viewItem: {
      flexDirection: 'row', 
      alignContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    labelPrice: {
      width: 80,
      textAlign: 'right',
    },
    viewSpaceBlank: {
      width: widthView*0.03,
    },
    labelPercentage: {
      color: 'red',
      textAlign: 'right'
    },
});