import {StyleSheet} from 'react-native'

import Colors from './Colors'

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
        opacity: .9,
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
        flex: 1
    }
})