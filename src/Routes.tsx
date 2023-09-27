import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Services from "./screens/Services";
import ShoppingCart from "./screens/ShoppingCart";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator>
           <Tab.Screen name="Serviços" component={Services}/> 
           <Tab.Screen name="Carrinho de Compras" component={ShoppingCart}/> 
        </Tab.Navigator>
    </NavigationContainer>
}