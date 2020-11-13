import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './style'
import { pxToDp } from '../../../style/unit'

const Register = () => {
  const [prompt, setPrompt] = useState('密码长度8到16位')
  const [disabled, setDisabeled] = useState(true)
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [warning, setWarning] = useState(false)
  const end = () => {
    setDisabeled(false)
  }
  const passwordTest = () => {
    let length1 = String(password1).length
    let length2 = String(password2).length
    if (password1 != password2) {
      setWarning(true)
      setPrompt('密码不一致，请重新输入')
    }
    if (length1 < 8 || length1 > 16 || length2 < 8 || length2 > 16) {
      setWarning(true)
    } else if (
      password1 == password2 &&
      length1 > 8 &&
      length1 < 16 &&
      length2 > 8 &&
      length2 < 16
    ) {
      setWarning(false)
      setPrompt('密码长度8到16位')
    }
  }
  const setColor = (warning) => {
    if (warning) {
      return 'red'
    } else {
      return '#909090'
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="输入密码"
        placeholderTextColor="#909090"
        style={styles.input}
        onChangeText={(text) => setPassword1(text)}
      />
      <TextInput
        placeholder="确认密码"
        placeholderTextColor="#909090"
        style={styles.confirm}
        onEndEditing={end}
        onChangeText={(text) => setPassword2(text)}
      />
      <Text
        style={{
          color: setColor(warning),
          width: pxToDp(285),
          height: pxToDp(20),
          marginLeft: pxToDp(14),
          marginRight: pxToDp(59),
          marginBottom: pxToDp(39),
          fontSize: pxToDp(10)
        }}
      >
        {prompt}
      </Text>
      <View>
        <Button
          title="确认提交"
          type="solid"
          buttonStyle={styles.button}
          titleStyle={{ color: '#FFFFFF' }}
          disabled={disabled}
          onPress={passwordTest}
        />
      </View>
    </View>
  )
}

export default Register
