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

const DetailsBitcoin = () => {
  return(
    <>
      <Header />
      <ContainerBitcoinDescription />
    </>
  );
};

export default DetailsBitcoin;