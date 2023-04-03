import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

export const Styles = StyleSheet.create({

    containerLayout:{
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: responsiveWidth(3)
    }, 

    title: {
        fontSize: responsiveFontSize(4.5),
        fontWeight: '500',
        paddingBottom: responsiveHeight (2.5),
        color: 'white'
    },

    iconLayout:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: responsiveHeight (1)
    },

    inputContainer:{
        paddingVertical: responsiveHeight(1),     
    },

    inputLabel: {
        fontSize: responsiveFontSize(2.3),
        fontWeight: '300',
        marginBottom: 4,
        color: '#D8D8D8'
    },

    input:{
        fontSize: responsiveFontSize(2.8),
        fontWeight: '300',
        borderColor: '#343434',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(3),
        color: 'white'
    },
    

    buttonStyle:{
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(3),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(7)
    },

    buttonLoginText:{
        fontSize: responsiveFontSize(2.3),
        color: 'black',
        fontWeight: '500',
        padding: 5
    },

    createAccountLayout:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: "bottom",
        marginTop: responsiveScreenHeight(3.5)
    },

    createAccountText:{
        color: 'white',
        fontSize: 14
    },

    createAccountTexthighlight:{
        color: '#3B6CB8',
        paddingLeft: 5,
        fontWeight: '700',
        fontSize: 15
    },

    buttonBackLayout:{
        paddingTop: 5, 
        paddingLeft: 0,
        paddingBottom: responsiveHeight(1),
        marginRight: responsiveWidth(78)
    }

})