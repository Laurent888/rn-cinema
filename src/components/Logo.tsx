import React from 'react';
import { View, Image } from 'react-native';

import logo from '../../assets/logo.png';

const Logo = (): JSX.Element => (
  <View style={{ width: 85, height: 85, transform: [{ translateY: -5 }] }}>
    <Image source={logo} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
  </View>
);

export default Logo;
