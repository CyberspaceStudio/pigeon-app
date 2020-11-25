import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import GetVerificationCode from './pages/GetVerificationCode'
import Register from './pages/Register'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F8F8F8'
          },
          headerTitleStyle: {
            fontWeight: '100'
          },
          headerTitleAlign: 'center',
          headerTitleAllowFontScaling: true
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetVerificationCode"
          component={GetVerificationCode}
          // 参数改变标题栏与发送的请求
          initialParams={{ type: 'Register' }}
          options={({ route }) => ({
            title: route.params?.type === 'Register' ? '用户注册' : '忘记密码'
          })}
        />
        <Stack.Screen
          name="SetPassword"
          component={Register}
          initialParams={{ type: 'Register' }}
          options={{ title: '设置密码' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <Register />
  )
}

export default App
