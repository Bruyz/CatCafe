import { TouchableOpacity, View, Text} from "react-native"
import { styles } from "./styles"
import { menuStackTypes } from "../../navigation/MenuStack.navigation"


export function Tela1({ navigation }: MenuStackTypes) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Tela2</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.push("Tela1")}>
            <Text>Tela2</Text>
            </TouchableOpacity>
        </View>
    )        
}