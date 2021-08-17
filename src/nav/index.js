import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import {colors} from '../constants';

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    card: colors.light,
    background: colors.light,
  },
};

const index = () => {
  return (
    <NavigationContainer theme={appTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default index;
