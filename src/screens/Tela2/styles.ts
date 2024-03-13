import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    supertopo: {
        textAlign: 'left',
        padding: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    topo: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'RubikMonoOne_400Regular'
    },
    topo2: {
        fontSize: 35,
        color: colors.green,
        fontFamily: 'RubikMonoOne_400Regular'
    },
    semitopo: {
        color: 'white',
        fontSize: 29,
        fontFamily: 'RubikMonoOne_400Regular'
    },
    button: {
        flexDirection: 'row',
        paddingBottom: 30,
        alignItems: 'center',
    },

    button2: {
      justifyContent: 'center',  
      backgroundColor: colors.green,
      borderRadius: 25
    },

    button1: {
        width: 61,
        height: 13,
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 25
    }

})