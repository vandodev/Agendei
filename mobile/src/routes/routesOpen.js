import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login/login.jsx';
import Account from '../screens/account/account';

const Stack = createNativeStackNavigator();

function RoutesOpen(){
    return (
        <Stack.Navigator>

            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{ headerShown: false }} 
            />

            <Stack.Screen 
                name="Account" 
                component={Account}
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    )
}

export default RoutesOpen;