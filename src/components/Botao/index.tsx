import { Button, TouchableOpacity, TouchableOpacityProps } from "react-native";
import {styles} from "./styles"

interface IButton extends TouchableOpacityProps {
    onPress: () => void;
}
    
export function Botao({onPress}: IButton){
    return(
        <TouchableOpacity style={styles.chapa} onPress={onPress}/>
    )
}