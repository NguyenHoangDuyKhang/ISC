import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Navigation from '../nav/nav';
import List_img from '../../pages/list_img/list_img';
import Product_card from '../../pages/product_card/product_card';
import List_comment from '../../pages/list_comment/list_comment';

function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Navigation} />
      <Stack.Screen name="List image" component={List_img} />
      <Stack.Screen name="Product card" component={Product_card} />
      <Stack.Screen name="List comment" component={List_comment} />
    </Stack.Navigator>
  );
}

export default RootStack;