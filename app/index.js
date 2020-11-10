import * as React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './pages/Home/index'
import GetCode from './pages/GetVerificationCode/index'

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#ffd531'
        }}
      >
        <Tab.Screen
          name="Home"
          component={GetCode}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" type="material" color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="android" type="material" color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
