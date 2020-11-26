import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { Color } from '../../style'
import styles from './style'

const Register = ({ navigation }) => {
  const [prompt, setPrompt] = useState('密码长度8到16位')
  const [disabled, setDisabeled] = useState(true)
  const [passwordSite, setPasswordSite] = useState('')
  const [passwordConfrim, setPasswordConfrim] = useState('')
  const [warning, setWarning] = useState(false)

  const buttonState = () => {
    setDisabeled(false)
  }

  const setTextColor = () => {
    if (warning) {
      return styles.textWarning
    } else {
      return styles.text
    }
  }
  const passwordTest = () => {
    const lengthSite = passwordSite.length
    const lengthConfrim = passwordConfrim.length

    if (passwordSite != passwordConfrim) {
      setWarning(true)
      setPrompt('密码不一致，请重新输入')
      return
    }
    const isPasswordLengthValid = (length) => {
      return length >= 8 || length <= 16
    }

    if (
      !isPasswordLengthValid(lengthSite) ||
      !isPasswordLengthValid(lengthConfrim)
    ) {
      setWarning(true)
      return
    } else if (passwordSite == passwordConfrim) {
      setWarning(false)
      setPrompt('密码长度8到16位')
      navigation.pop(2)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="输入密码"
        placeholderTextColor={Color.placeholderTextColor}
        style={styles.input}
        onChangeText={(text) => setPasswordSite(text)}
      />
      <TextInput
        placeholder="确认密码"
        placeholderTextColor={Color.placeholderTextColor}
        style={styles.confirm}
        onEndEditing={buttonState}
        onChangeText={(text) => setPasswordConfrim(text)}
      />
      <Text style={setTextColor()}>{prompt}</Text>
      <View>
        <Button
          title="确认提交"
          type="solid"
          buttonStyle={styles.button}
          titleStyle={{ color: Color.buttonTitleColor }}
          disabled={disabled}
          onPress={passwordTest}
        />
      </View>
    </View>
  )
}

export default Register
