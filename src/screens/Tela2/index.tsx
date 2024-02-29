import { ImageBackground, View, Text} from "react-native"
import { styles } from "./styles"

export function Tela2() {
    const tela = require('../../assets/cafezin.png')
    return (
        <ImageBackground style={styles.container} source={tela}>
            <View>
                <Text style={styles.topo}>SEJA BEM VINDO(A)</Text>
                <Text style={styles.semitopo}> Sua cafeteria mais fofa, agora mais conectada com você! </Text>
            </View>
        </ImageBackground>
    )
}