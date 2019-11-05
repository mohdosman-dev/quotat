import {StyleSheet} from 'react-native';
import Colors from '../components/common/Colors';

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e3e3e3',
  },

  // Splash Screen
  splashScreenContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  splashTop: {
    alignSelf: 'center',
    top: '40%',
  },
  splashText: {
    color: Colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
  splashBottom: {
    top: '70%',
  },

  // Login Screen
  loginContainer: {
    position: 'relative',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.grey_5,
  },
  topScreen: {
    backgroundColor: Colors.primaryColor,
    position: 'relative',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-20%',
  },
  formContainer: {},
});
