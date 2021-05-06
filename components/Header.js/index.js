import React from 'react';
import {
  View,
  Text,
  Image,
 } from 'react-native';

// STYLES 
import styles from './styles';

const Header = () => {
  return(
    <>
      <View style={styles.header}> 
        <Text> icon search </Text>
        <Image
          style={styles.iconMain}
          source={require('../../assets/icon.png')} 
        />
        <Text> icon menu </Text>
      </View>
      <View style={styles.marketSnapshot}>
        <Text style={styles.textColormarketSnapshot}> Market Snapshot </Text> 
      </View>
  </>
  );
};

export default Header;