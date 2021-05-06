import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
 } from 'react-native';

// STYLES 
import styles from './styles';

// ICONS
// import { FontAwesomeIcon } from 'fortawesome/react-native-fontawesome';
// import {faPlus, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';

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
        <View style={styles.header}> 
          <Text> icon search </Text>
          <Text> icon app </Text>
          <Text> icon menu </Text>
        </View>
        <View style={styles.marketSnapshot}>
          <Text style={styles.textColormarketSnapshot}> Market Snapshot </Text> 
        </View>
        <View style={styles.viewLabels}>
          <Text style={styles.labelNameTitle}> Name </Text>
          <Text style={styles.labelPriceTitle}> Price </Text>
          <Text> 24Hrs</Text>
        </View>
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
 