import {StyleSheet, Dimensions} from 'react-native';
import {white} from '../../utils/colors';

const widthView = Dimensions.get('window').width;
const heightView = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    header: {
      width: widthView*0.95,
      height: heightView * 0.08,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
    },
    iconMain: {
      flex: 1,
      height: 50,
      resizeMode: 'contain',
      marginLeft: 20,
    },
    marketSnapshot: {
      backgroundColor: 'blue',
      height: heightView * 0.04,
      justifyContent: 'center',
      alignContent: 'center',
      paddingLeft: 10,
    },
    textColormarketSnapshot: {
      color: white,
      fontWeight: 'bold',
    },
});