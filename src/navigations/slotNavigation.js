import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import SlotScreen from '../screens/SlotsScreen';
import SlotDetailsScreen from '../screens/SlotDetailsScreen';

const Stack = createStackNavigator();

const SlotNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Planner App"
                component={HomePage}
                options={{headerShown: false, cardStyle: {backgroundColor: 'white'}}}
            />
            <Stack.Screen 
                name="Planner"
                component={SlotScreen}
                options={{ title: 'Plan Your Day', cardStyle: {backgroundColor: 'white'} }}
            />
            <Stack.Screen 
                name="Slot"
                component={SlotDetailsScreen}
                options={({ route }) => ({ title: route.params.slotInfo.item.slotTimeString, cardStyle: {backgroundColor: 'white'} })}
            />
        </Stack.Navigator>
    );
  }

export default SlotNavigation;