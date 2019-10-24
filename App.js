import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HomeScreen from './src/views/HomeSreen';
import QuotesScreen from './src/views/QuotesScreen';
import CategoriesScreen from './src/views/CategoriesScreen';
import AuthorScreen from './src/views/AuthorScreen';
import AuthorsScreen from './src/views/AuthorsScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Quotes: {screen: QuotesScreen},
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  retrun(
    <AppContainer />
  )
}

export default App;
