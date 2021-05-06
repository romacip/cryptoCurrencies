import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
 } from 'react-native';

// STYLES 
import styles from './styles';

// ICONS
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import {faPlus, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';

 const Home = () => {
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
          <Text> Name </Text>
          <Text> Price </Text>
          <Text> 24Hrs</Text>
        </View>
        {/* INSERT FLATLIST HERE */ }
      </SafeAreaView>
    </>
   );
 };

 export default Home;
 