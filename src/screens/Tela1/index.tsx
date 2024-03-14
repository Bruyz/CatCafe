import { Image, View, Text} from "react-native"
import { styles } from "./styles"
import { Botao } from '../../components/Botao'
import { IPage } from "../../../App"

export function Tela1({setPage}:IPage) {
    const logo = require('../../assets/catLogo.png')
    return (
            <View style={styles.container}>
                       <Image  source={logo}/>
                            <View style={styles.centrao}>
                                <Text style={styles.centro1}>Cat</Text>
                                <Text style={styles.centro2}>Café</Text>
                            </View>
                 <View style={styles.buttons}>
                    <View >
                        <Botao onPress={() => setPage(1)} cor = {true}/>
                    </View> 
                    <View >
                        <Botao onPress={() => setPage(2)} cor = {false}/>
                    </View> 
                </View>
            </View>
    )        
}