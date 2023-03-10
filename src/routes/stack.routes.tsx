import React from 'react'
import Bedroom from '../pages/Bedroom';
import LivingRoom from '../pages/Living-Room';
import Home from '../pages/Home';
import GamerRoom from '../pages/Gamer-Room'
import PartyArea from '../pages/Party-Area';

import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle: {
                backgroundColor: 'rgb(243,243,243)'
            }
        }}


    >

        <stackRoutes.Screen
            name="Home"
            component={Home}
        />

        <stackRoutes.Screen
            name="Bedroom"
            component={Bedroom}
        />
        <stackRoutes.Screen
            name="LivingRoom"
            component={LivingRoom}
        />

        <stackRoutes.Screen
            name="GamerRoom"
            component={GamerRoom}
        />

        <stackRoutes.Screen
            name="PartyArea"
            component={PartyArea}
        />


    </stackRoutes.Navigator>

)

export default AppRoutes;