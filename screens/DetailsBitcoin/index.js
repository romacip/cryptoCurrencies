import React from 'react';
import {
  View,
  Text,
  Image,
 } from 'react-native';

// STYLES 
import styles from './styles';

// COMPONENTS
import Header from '../../components/Header.js/index.js';
import ContainerBitcoinDescription from '../../components/ContainerBitconDescription';
import RowDetailBitcoin from '../../components/RowDetailBitcoin';

const DetailsBitcoin = props => {
  const { item } = props;

  return(
    <>
      <Header />
      <ContainerBitcoinDescription />
      <RowDetailBitcoin />
      <View style={{ flexDirection: 'row' }}>
        <View> 
          <Text> Image here </Text> 
        </View>
        <View style={{ flexDirection: 'column'}}> 
          <Text> Bitcoin (BTC) </Text>
          <Text> 23 abril 201 </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text> HIGH </Text>
        <Text> $55,044.96 </Text>
        <Text> AVERAGE </Text>
        <Text> $50,946.87 </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text> LOW </Text>
        <Text> $55,044.96 </Text>
        <Text> CHANGE </Text>
        <Text> $50,946.87 </Text>
      </View>
    </>
  );
};

export default DetailsBitcoin;