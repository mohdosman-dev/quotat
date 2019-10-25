import { StyleSheet } from 'react-native';
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
        fontFamily: "Times New Roman",
    },

    // Quote style
    quoteStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '200',
        fontStyle: 'italic',
        textShadowColor: Colors.grey_5,
        textShadowRadius: 1
    },
    // Author
    authorImage: {
        width: 60,
        height: 60,
        borderColor: 1,
        borderRadius: 50,
        marginVertical: 5,
        overflow: 'hidden'
    }
    
});