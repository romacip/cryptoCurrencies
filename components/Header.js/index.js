import React from 'react';
import {
  View,
  Text,
  Image,
 } from 'react-native';

// STYLES 
import styles from './styles';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return(
    <>
      <View style={styles.header}> 
        <FontAwesomeIcon icon={faSearch} />
        <Image
          style={styles.iconMain}
          source={require('../../assets/icon.png')} 
        />
        <FontAwesomeIcon icon={faBars} />
      </View>
      <View style={styles.marketSnapshot}>
        <Text style={styles.textColormarketSnapshot}> Market Snapshot </Text> 
      </View>
  </>
  );
};

export default Header;