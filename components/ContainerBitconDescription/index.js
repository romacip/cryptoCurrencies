import React from 'react';
import {
  View,
  Text,
  Image,
 } from 'react-native';

// STYLES 
import styles from './styles';

// COMPONENTS
import Header from '../../components/Header.js';

const DescriptionBitcoin = () => {
  return(
    <>
      <View style={styles.viewLabels}>
        <Text style={styles.labelNameTitle}> Name </Text>
        <Text style={styles.labelPriceTitle}> Price </Text>
        <Text> 24Hrs</Text>
      </View>
    </>
  );
};

export default DescriptionBitcoin;