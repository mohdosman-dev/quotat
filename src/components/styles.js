import {StyleSheet} from 'react-native';
import Colors from './common/Colors';

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.primaryLightColor,
    borderBottomWidth: 2,
    borderBottomEndRadius: 1,
    borderBottomStartRadius: 1,
  },
  sectionIcon: {
    width: 40,
    height: 40,
  },
  sectionText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Times New Roman',
  },

  // Quote style
  quoteTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '100',
    fontStyle: 'italic',
    textShadowColor: Colors.grey_5,
    textShadowRadius: 1,
  },

  // Author
  authorImage: {
    width: 60,
    height: 60,
    borderColor: 1,
    borderRadius: 50,
    marginVertical: 5,
    overflow: 'hidden',
  },
  authorName: {
    textAlign: 'center',
    fontSize: 13,
    color: '#4f5b62',
    fontStyle: 'normal',
  },

  // Form style
  formContainer: {
    borderLeftWidth: 1,
    borderRadius: 7,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: Colors.white,
    padding: 5,
  },
  formTitleStyle: {
    fontSize: 25,
    color: Colors.primaryColor,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
});
