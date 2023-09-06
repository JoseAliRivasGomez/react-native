import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
            <View style={ styles.cajaAzul } />
        </View>
    );
};

//0
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         flexDirection: 'column',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         // alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center'
//         //top: 50,
//     },
//     cajaAzul: {
//         // flex: 4,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         // alignSelf: 'flex-start',
//     },
// });

//1
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         flexDirection: 'column',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         // alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         //height: 100,
//         flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center'
//         //top: 50,
//     },
//     cajaAzul: {
//         // flex: 4,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         // alignSelf: 'flex-start',
//     },
// });

// //2
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         flexDirection: 'column',
//         justifyContent: 'center',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         // alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center'
//         //top: 50,
//     },
//     cajaAzul: {
//         // flex: 4,
//         // width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         // alignSelf: 'flex-start',
//     },
// });

// //3
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         flexDirection: 'column',
//         justifyContent: 'center',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center'
//         //top: 50,
//     },
//     cajaAzul: {
//         // flex: 4,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         alignSelf: 'center',
//     },
// });

// //4
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         alignSelf: 'center',
//         //top: 50,
//     },
//     cajaAzul: {
//         // flex: 4,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         alignSelf: 'flex-start',
//     },
// });

// //5
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         // height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         // alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         // height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center',
//         //top: 50,
//     },
//     cajaAzul: {
//         // flex: 4,
//         width: 100,
//         // height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         // alignSelf: 'flex-start',
//     },
// });

// //6
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         // flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     cajaMorada: {
//         flex: 2,
//         // width: 100,
//         // height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         // alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         flex: 2,
//         // width: 100,
//         // height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center',
//         //top: 50,
//     },
//     cajaAzul: {
//         flex: 4,
//         // width: 100,
//         // height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         // alignSelf: 'flex-start',
//     },
// });

// //7
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         // flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         // alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center',
//         //top: 50,
//     },
//     cajaAzul: {
//         // flex: 4,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         // alignSelf: 'flex-start',
//     },
// });

// //8
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         // flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         // alignSelf: 'flex-end',
//         // top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center',
//         //top: 50,
//         left: 100,
//     },
//     cajaAzul: {
//         // flex: 4,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         // alignSelf: 'flex-start',
//     },
// });

// //9
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#28425B',
//         // flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     cajaMorada: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         // alignSelf: 'flex-end',
//         top: 100
//     },
//     cajaNaranja: {
//         // flex: 2,
//         width: 100,
//         height: 100,
//         //flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         // alignSelf: 'center',
//         //top: 50,
//         left: 100,
//     },
//     cajaAzul: {
//         // flex: 4,
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         // alignSelf: 'flex-start',
//     },
// });

// //10
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cajaMorada: {
        // flex: 2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // alignSelf: 'flex-end',
        // top: 100
    },
    cajaNaranja: {
        // flex: 2,
        width: 100,
        height: 100,
        // flex: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'center'
        top: 50,
    },
    cajaAzul: {
        // flex: 4,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start',
    },
});
