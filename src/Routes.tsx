import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Services from "./screens/Services";
import ShoppingCart from "./screens/ShoppingCart";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#A050BE',
                tabBarInactiveTintColor: '#fff',
                tabBarInactiveBackgroundColor: '#FABE50',
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: '#FABE50',
                    height: 70,
                    width: '100%',
                },
                tabBarLabelStyle: {
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    marginTop: 3,
                    paddingTop: 21,
                },
                tabBarIcon: ({ focused }) => null,
            }}>
            <Tab.Screen name="Serviços" component={Services} />
            <Tab.Screen name="Carrinho de Compras" component={ShoppingCart} />
        </Tab.Navigator>
    </NavigationContainer>
}