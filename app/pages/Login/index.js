import React, { useState } from 'react'
import { Text, Image, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Formik } from 'formik'
import { Shadow } from 'react-native-neomorph-shadows'
import TextInput from '../../components/TextInput'

import LogoShowPng from '../../asserts/images/logoShow.png'
import logoHidePng from '../../asserts/images/logoHide.png'
import style from './style'

const Login = () => {
  const [isEditingPassword, setIsEditingPassword] = useState(false)

  return (
    <View style={style.container}>
      <Shadow useArt style={style.logoContainer}>
        {isEditingPassword ? (
          <Image source={logoHidePng} style={style.logoHide} />
        ) : (
          <Image source={LogoShowPng} style={style.logo} />
        )}
      </Shadow>
      <Shadow useArt style={style.formContainer} />
      <Formik
        initialValues={{ account: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <View style={style.form}>
            <TextInput
              style={style.input}
              type="account"
              name="account"
              placeholder="手机号"
            />
            <TextInput
              style={style.input}
              type="password"
              name="password"
              placeholder="输入密码"
              onFocus={() => setIsEditingPassword(true)}
              onBlur={() => setIsEditingPassword(false)}
            />
            <Shadow useArt style={style.loginButtonContainer}>
              <Button
                title="登录"
                buttonStyle={style.button}
                titleStyle={style.buttonTitle}
              />
            </Shadow>
          </View>
        )}
      </Formik>
      <View style={style.panel}>
        <Text style={style.panelItem}>忘记密码?</Text>
        <View style={style.divider} />
        <Text style={style.panelItem}>快速注册</Text>
      </View>
    </View>
  )
}
export default Login
