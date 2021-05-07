import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
 } from 'react-native';

// STYLES 
import styles from './styles';

const RowDetailBitcoin = props => {
  // console.log('here is props', props);
  let { item } = props;

  if(item === undefined) {
    item = {
      "id": "1",
      "name": "Bitcoin",
      "description": "BTC",
      "price": 48908.38,
      "percentage": -11.15,
      "icon": "icon",
      "status": true
    };
  };
  
  const getStyleByItem = itemStatus => {
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

  return(
    <>
      <TouchableOpacity onPress={() => alert('navigation.navigate')}>
        <View style={[styles.viewItem, {backgroundColor: getStyleByItem(item.status)}]}>
          <Text> {item.icon} </Text>
          <Body item={item} />
          <Text style={styles.labelPrice}> ${item.price}</Text>
          <View style={styles.viewSpaceBlank} />
          <Text style={styles.labelPercentage}> {item.percentage} % </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default RowDetailBitcoin;