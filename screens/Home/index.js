import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
 } from 'react-native';

// COMPONENTS
import Header from '../../components/Header.js';
import ContainerBitcoinDescription from '../../components/ContainerBitconDescription';
import RowDetailBitcoin from '../../components/RowDetailBitcoin';

// STYLES 
import styles from './styles';

// APIS
import DATA from '../../__mocks__/informationBitcon.json'

// SCREENS
import DetailsBitcoin from '../DetailsBitcoin';

const Home = () => {  
  return(
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <ContainerBitcoinDescription />
        <FlatList
          data={DATA}
          renderItem={({ item }) => <RowDetailBitcoin item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
   );
 };

 export default Home;
 