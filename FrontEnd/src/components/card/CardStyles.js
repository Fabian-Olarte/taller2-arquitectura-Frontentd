import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

export const Styles = StyleSheet.create({

    containerLayout:{
        backgroundColor: '#262626',
        width: responsiveWidth(90),
        height: responsiveHeight(70),
        borderRadius: 20,
        marginBottom: 10
    },

    image:{
        width: '100%',
        height: '70%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },

    infoContainer:{
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(1),
        display: "flex",
        justifyContent: 'space-between',
        height: '25%'
    },  

    name:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3.8),
        justifyContent: 'flex-start'
    },

    status:{
        color: '#AAAAAA',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.7),
        paddingBottom: 10
    },

    seen:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2)
    }


})