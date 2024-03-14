import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    chapa: {
        width: 81,
        height: 13,
        borderRadius: 25,
        backgroundColor: colors.green,
        flexDirection: 'row',
    },

    chapaCor: {
        width: 61,
        height: 13,
        backgroundColor: colors.white,
        borderRadius: 20
    }
})