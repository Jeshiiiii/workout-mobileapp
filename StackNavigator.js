import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import Discover from './app/Discover'; // Adjust the path as needed
import Profile from './app/Profile'; // Adjust the path as needed
import History from './app/History';
import Goal from './app/Goal';
import Fullbody from './app/Fullbody'; // Adjust the path as needed
import Upperbody from './app/Upperbody'; // Adjust the path as needed
import Lowerbody from './app/Lowerbody'; // Adjust the path as needed
import Cardio from './app/Cardio'; // Adjust the path as needed
import Login from './app/Login';
import Signup from './app/Signup';
import Splash from './app/Splash';
import Reports from './app/Reports';
import Fitpad from './app/Fitpad';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
       <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000', // Change this to the color you desire
          },
          headerTintColor: '#fff', // Change this to the color of the text/icons on the header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Workout" component={WorkoutScreen}/>
        <Stack.Screen name="Fit" component={FitScreen}/>
        <Stack.Screen name="Rest" component={RestScreen}/>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Fitpad" component={Fitpad} />
        {/* Define the additional screens here */}
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Goal" component={Goal} />
        <Stack.Screen name="Fullbody" component={Fullbody} />
        <Stack.Screen name="Upperbody" component={Upperbody} />
        <Stack.Screen name="Lowerbody" component={Lowerbody} />
        <Stack.Screen name="Cardio" component={Cardio} />
        <Stack.Screen name="Reports" component={Reports} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
