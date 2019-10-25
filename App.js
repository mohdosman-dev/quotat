import React from 'react';
import {View, StatusBar} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/views/HomeSreen';
import QuotesScreen from './src/views/QuotesScreen';
import CategoriesScreen from './src/views/CategoriesScreen';
import AuthorScreen from './src/views/AuthorScreen';
import AuthorsScreen from './src/views/AuthorsScreen';
import FavouritesScreen from './src/views/FavouritesScreen';

import Colrs from './src/components/common/Colors';
import Colors from './src/components/common/Colors';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Quotes: {screen: QuotesScreen},
    Authors: {screen: AuthorsScreen},
    Author: {screen: AuthorScreen},
    Favourites: {screen: FavouritesScreen},
    Categories: {screen: CategoriesScreen},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.primaryDarkColor}
        barStyle="light-content"
      />
      <AppContainer />
    </>
  );
};

export default App;
