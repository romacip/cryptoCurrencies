import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
 } from 'react-native';

// COMPONENTS
import Header from '../../components/Header.js';
import ContainerBitcoinDescription from '../../components/ContainerBitconDescription';

// STYLES 
import styles from './styles';

// APIS
import DATA from '../../__mocks__/informationBitcon.json'

const Home = () => {  
  const getStyleByItem = (itemStatus) => {
    if(itemStatus){
      return '#e4f3e9';
    } else if(itemStatus === null){
      return '#FFFFFF';
    } else {
      return '#f5dfdc';
    }
  };

  const Body = ({ item }) => (
    <View style={styles.bodyRow}> 
      <Text style={styles.fontBold}> {item.name} </Text>
      <Text style={styles.labelDescription}> {item.description} </Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <View style={[styles.viewItem, {backgroundColor: getStyleByItem(item.status)}]}>
      <Text> {item.icon} </Text>
      <Body item={item} />
      <Text style={styles.labelPrice}> ${item.price}</Text>
      <View style={styles.viewSpaceBlank} />
      <Text style={styles.labelPercentage}> {item.percentage} % </Text>
    </View>
  );

  return(
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <ContainerBitcoinDescription />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
   );
 };

 export default Home;
 