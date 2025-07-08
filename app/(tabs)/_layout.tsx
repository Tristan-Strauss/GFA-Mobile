import { Tabs } from "expo-router";
import Ionicicons from "@expo/vector-icons/Ionicons";

function TabLayout() {
    return(
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused}) => (
                        <Ionicicons 
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />                        
                    )
                }}
            />

        </Tabs>
    )
}

export default TabLayout