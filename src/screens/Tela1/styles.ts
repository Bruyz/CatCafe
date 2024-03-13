import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.greenLogo,
        alignItems: 'center',
        justifyContent: 'center'
    },

    background: {
        width: 128,
        height: 128
    },

    centrao: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    centro1: {
        fontFamily: 'RubikMonoOne_400Regular',
        fontSize: 20,
        color: colors.white
    },

    centro2: {
        fontFamily: 'RubikMonoOne_400Regular',
        fontSize: 20,
        color: colors.green
    },

    button: {
        /*alignItems: 'center',*/
        /*display: 'flex',*/
        flexDirection: 'row',
        paddingBottom: 30,
        /*justifyContent: 'flex-end'*/
    },

    button1: {
        justifyContent: 'center',  
        backgroundColor: colors.green,
        borderRadius: 25
      },
  
      button2: {
          width: 61,
          height: 13,
          justifyContent: 'center',
          backgroundColor: colors.white,
          borderRadius: 25
      }
})