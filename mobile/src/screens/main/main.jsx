
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from '../../constants/icon';
import { Image } from 'react-native';


import AbaHome from '../abahome/abahome.jsx';
import AbaCalendar from '../abacalendar/abacalendar.jsx';
import AbaProfile from '../abaprofile/abaprofile.jsx';


const Tab = createBottomTabNavigator();

function Main(){
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='home' 
                component={AbaHome}
                options={{
                    headerTitleAlign: "center",
                    tabBarShowLabel: false,
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{width:125, height:29}}/>
                    },
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.home} style={
                                {
                                    width:25, 
                                    height:25,
                                    opacity: focused ? 1 : 0.3
                                }
                            }
                        />
                    }
                }}            
            />
            <Tab.Screen
                name='calendar'
                component={AbaCalendar}
                options={{
                    headerTitleAlign: "center",
                    tabBarShowLabel: false,
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{width:125, height:29}}/>
                    },
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.home} style={
                            {
                                width:25, 
                                height:25,
                                opacity: focused ? 1 : 0.3
                            }
                        }
                    />
                    }
                }}              
              />
            <Tab.Screen
                name='profile'
                component={AbaProfile}
                options={{
                    headerTitleAlign: "center",
                    tabBarShowLabel: false,
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{width:125, height:29}}/>
                    },
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.home} style={
                            {
                                width:25, 
                                height:25,
                                opacity: focused ? 1 : 0.3
                            }
                        }
                    />
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default Main;
