import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './StackNavigator';

const index = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default index;
