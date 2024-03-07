import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {styles} from "./styles"

export function Botao(rest:TouchableOpacityProps){
    return(
        <TouchableOpacity style={styles.chapa} {...rest}/>
    )
}