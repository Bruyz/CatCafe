import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenTela1, ScreenTela2 } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';

type MenuTabParam = {
    Tela1: undefined
    Tela2: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Tela1">
export type menuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
        <Tab.Screen name="Tela1" component={ScreenTela1}
        options={{
            tabBarIcon: () => (
                <Entypo name="slideshare" size={24} color="black" />
            )
        }}
        />
        <Tab.Screen name="Tela2" component={ScreenTela2}
            options={{
                tabBarIcon: () => (
                    <Feather name="sliders" size={24} color="black" />
                )
            }}  
        />
        </Tab.Navigator>
    );
}