import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../screens/main/main.jsx';
import Services from "../screens/services/services.jsx";
import Schedule from "../screens/schedule/schedule.jsx";

import { COLORS } from '../constants/theme';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function RoutesPrivate(){
    return (
        <Stack.Navigator>

            <Stack.Screen 
                name="Main" 
                component={Main}
                options={{ headerShown: false }} 
            />

            <Stack.Screen  
                name="services"
                component={Services}
                options={{ 
                    headerTitle: "Serviços", 
                    headerTitleAlign: "center",
                    headerTintColor: COLORS.white,
                    headerShadowVisible: false,
                    headerStyle: styles.services
                }} 
            />

            <Stack.Screen  
                name="schedule"
                component={Schedule}
                options={{ 
                    headerTitle: "Fazer uma reserva", 
                    headerTitleAlign: "center",
                    headerTintColor: COLORS.blue,
                    headerShadowVisible: false,
                    headerStyle: styles.header
                }} 
            />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: COLORS.white
    },
    services: {
      backgroundColor: COLORS.blue
    }
})

export default RoutesPrivate;