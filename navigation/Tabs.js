import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Borabit from "../screens/Borabit";
import Bithum from "../screens/Bithum";
import Upbit from "../screens/Upbit";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { useLayoutEffect } from "react";

const Tabs = createBottomTabNavigator();
const getHeaderName = (route) => {
  return route?.state?.routeNames[route?.state?.index] || "Borabit";
};

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route),
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          console.log(route.name);
          if (route.name === "Borabit") {
            return (
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={28}
                color={focused ? "white" : "black"}
              />
            );
          } else if (route.name === "Bithum") {
            return (
              <Ionicons
                name="logo-react"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Upbit") {
            return (
              <Ionicons
                name="md-logo-android"
                size={28}
                color={focused ? "white" : "grey"}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#5234bf",
        },
      }}
    >
      <Tabs.Screen name="Borabit" component={Borabit}></Tabs.Screen>
      <Tabs.Screen name="Bithum" component={Bithum}></Tabs.Screen>
      <Tabs.Screen name="Upbit" component={Upbit}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
