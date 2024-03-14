import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.greenLogo,
        alignItems: 'center',
        justifyContent: 'center'
    },

    centrao: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
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

    buttons: {
        padding: 20,
        position: 'absolute',
        bottom: 20,
        alignItems: 'flex-end',
        flexDirection: 'row',
    }
})