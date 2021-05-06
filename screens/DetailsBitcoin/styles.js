import {StyleSheet, Dimensions} from 'react-native';
import {white} from '../../utils/colors';

const widthView = Dimensions.get('window').width;
const heightView = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    header: {
      height: heightView * 0.08,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
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