import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Jobs from "./screens/jobs";
import JobDetails from "./screens/jobDetails";
import FavoritedJobs from "./screens/favoritedJobs";

const App = () => {

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const MainComponent = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Job List" component={Jobs} options={{
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "#F4364C",
                    },
                    headerStyle: {
                        backgroundColor: "white",
                    },
                }} />
                <Stack.Screen name="Job Details" component={JobDetails} options={{
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "#F4364C",
                    },
                    headerStyle: {
                        backgroundColor: "white",
                    },
                }} />
            </Stack.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Jobs" component={MainComponent} options={{ headerShown: false }} />
                <Drawer.Screen name="Favorited Jobs" component={FavoritedJobs} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App;