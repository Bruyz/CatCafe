import { ImageBackground, View, Text} from "react-native"
import { styles } from "./styles"
import {Botao} from '../../components/Botao'
import { IPage } from "../../../App"

export function Tela2({setPage}:IPage) {
    const tela = require('../../assets/cafezin.png')
    return (
        <ImageBackground style={styles.container} source={tela}>
            <View style={styles.supertopo}>
                <Text style={styles.topo}>BEM</Text>
                <Text style={styles.topo2}>VINDO(A)</Text>
            </View>
            <View>
                <Text style={styles.semitopo}> Sua cafeteria mais fofa, agora mais conectada com você! </Text>
            </View>
            <View style={styles.button}>
                    <View style={styles.button1}>
                        <Botao onPress={() => setPage(1)} />
                    </View> 
                    <View style={styles.button2}>
                        <Botao onPress={() => setPage(2)} />
                    </View> 
            </View>
        </ImageBackground>
    )
}