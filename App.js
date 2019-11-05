import React from 'react';
import {StatusBar} from 'react-native';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  SplashScreen,
  LoginScreen,
  SignupScreen,
  HomeScreen,
  QuotesScreen,
  CategoriesScreen,
  AuthorScreen,
  AuthorsScreen,
  FavouritesScreen,
} from './src/views';

import Colors from './src/components/common/Colors';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: 'normal',
  },
};

const AuthNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: defaultNavigationOptions,
  },
);

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
    defaultNavigationOptions: defaultNavigationOptions,
  },
);
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.43.29:4000',
  }),
  cache: new InMemoryCache(),
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      Auth: AuthNavigator,
      App: AppNavigator,
    },
    {
      initialRouteName: 'Auth',
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <StatusBar
          backgroundColor={Colors.primaryDarkColor}
          barStyle="light-content"
        />
        <AppContainer />
      </ApolloProvider>
    </>
  );
};

export default App;
