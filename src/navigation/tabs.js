import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/";
import { icons, COLORS } from "../constants";
import TabIcon from "../components/TabIcon";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: "10%",
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.black,
          borderTopColor: "transparent",
          height: 70,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.dashboard_icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search_icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.notification_icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.menu_icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
