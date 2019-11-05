import {StyleSheet} from 'react-native';

import Colors from './Colors';

export default Styles = StyleSheet.create({
  toolbarContainer: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    opacity: 0.9,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    elevation: 5,
  },
  toolbarTitle: {
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
    flex: 3,
  },
  toolbarActionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },

  // Card Styles
  cardContainer: {
    borderLeftWidth: 1,
    borderRadius: 7,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 16,
    marginTop: 10,
    backgroundColor: Colors.white,
    padding: 8,
  },
  cardSectionContainer: {
    borderBottomWidth: 0,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: '#ddd',
    padding: 8,
    alignItems: 'center',
  },

  // Seprator Style
  sepratorStyle: {
    backgroundColor: '#263238',
    width: '50%',
    height: 1,
    alignSelf: 'center',
    marginVertical: 3,
    opacity: 0.2,
  },

  // Input style
  inputContainer: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  labelStyle: {
    fontSize: 15,
    paddingLeft: 5,
    flex: 1,
    color: Colors.primaryColor,
  },
  inputStyle: {
    color: Colors.black,
    flex: 2,
  },

  // Button style
  buttonStyle: {
    height: 45,
    width: '100%',
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },

  // Link button style
  linkButtonContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  linkButtonMessage: {
    fontSize: 12,
  },
  linkButtonStyle: {},
  linkButtonTextStyle: {
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
});
