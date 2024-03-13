import { ImageBackground, View, Text} from "react-native"
import { styles } from "./styles"
import { Botao } from '../../components/Botao'
import { IPage } from "../../../App"

export function Tela1({setPage}:IPage) {
    const logo = require('../../assets/catLogo.png')
    return (
            <View style={styles.container}>
                       <ImageBackground style={styles.background} source={logo}>
                            <View style={styles.centrao}>
                                <Text style={styles.centro1}>Cat</Text>
                                <Text style={styles.centro2}>Café</Text>
                            </View>
                       </ImageBackground>
                 <View style={styles.button}>
                    <View style={styles.button1}>
                        <Botao onPress={() => setPage(1)} />
                    </View> 
                    <View style={styles.button2}>
                        <Botao onPress={() => setPage(2)} />
                    </View> 
                </View>
            </View>
    )        
}