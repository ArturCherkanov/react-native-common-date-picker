import { StyleSheet, Dimensions } from 'react-native';

export const toolBarStyles = StyleSheet.create({
    view: {

    },
    title: {
        fontSize: 17,
    },
    cancelText: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 1,
        borderWidth:0,
        borderColor: 'red'

    },
    confirmText: {
        paddingVertical: 20,
        color: 'blue',
        fontSize: 18,
        textAlign: 'center'
    },
});

export const weekBarStyles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
        margin: 6,
    },
    text: {
        fontSize: 16,
        color: '#3e3e3e',
    },
});

export const listItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerTitleContainer: {
        marginTop: 10,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 17,
        color: '#3e3e3e',
    },
    dayContent: {
        width: Dimensions.get('window').width, // Adapt to "horizontal" props.
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    day: {
        textAlign: 'center',
        paddingVertical: 3,
        color: '#3e3e3e',
    },
});

