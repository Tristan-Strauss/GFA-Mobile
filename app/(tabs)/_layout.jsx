import { Tabs } from "expo-router";
import Ionicicons from "@expo/vector-icons/Ionicons";
import LanguageSelector from "../../components/headerLanguageSelector";
import { useTranslation } from "react-i18next";

function TabLayout() {


    const { t } = useTranslation();


    return(
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                headerRight: () => <LanguageSelector />
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: t("screens.index.title"),
                    tabBarIcon: ({ color, focused}) => (
                        <Ionicicons 
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />                        
                    )
                }}
            />

            <Tabs.Screen 
                name="principals"
                options={{
                    title: t("screens.principals.title"),
                    tabBarIcon: ({color, focused}) => (
                        <Ionicicons 
                            name={focused ? "book-sharp" : "book-outline"}
                            color={color}
                            size={24}
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name="resources"
                options={{
                    title: t("screens.resources.title"),
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicicons 
                            name={focused ? "library-sharp" : "library-outline"}
                            color={color}
                            size={24}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: t("screens.about.title"),
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicicons 
                            name={focused ? "information-circle-sharp" : "information-circle-outline"}
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