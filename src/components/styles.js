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
    }
    
});