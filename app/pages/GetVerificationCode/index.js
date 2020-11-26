import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-elements'
import { View } from 'react-native'
import MyIcon from '../../asserts/fonts/customIcon'
import BaseElementsInput from '../../components/BaseElementsInput'
import BaseButton from '../../components/BaseButton'

import { pxToDp } from '../../style/unit'
import Style, { color } from './style'

export default ({ navigation, route }) => {
  const [isFocusTele, setFocusTele] = useState(true)
  const [isFocusCode, setFocusCode] = useState(false)
  const [inputTeleStatus, setTeleStatus] = useState(false)
  const [inputCodeStatus, setCodeStatus] = useState(false)
  const [clock, setClock] = useState(0)
  const [codeIsError, setcodeIsError] = useState(false)

  const checkTelePhone = (tele) => /^[1]([3-9])[0-9]{9}$/.test(tele)
  const checkCode = (code) => /^[0-9]{6}$/.test(code)

  const getCodeIsAble = () => inputTeleStatus && clock === 0
  const getFinnshButtonIsAble = () => inputCodeStatus && inputTeleStatus

  const getCode = () => {
    setClock(60)
  }
  useEffect(() => {
    let hander
    if (clock > 0) {
      hander = setTimeout(() => {
        setClock(clock - 1)
      }, 1000)
      return () => hander && clearTimeout(hander)
    }
  }, [clock])

  const submitSignUpReq = () => {
    // 发送请求，再改变错误信息
    setcodeIsError(!codeIsError)
    navigation.navigate('SetPassword', { type: route.params?.type })
  }
  return (
    <>
      <BaseElementsInput
        placeholder="手机号码"
        autoFocus={true}
        leftIcon={
          <MyIcon
            name="shouji"
            size={pxToDp(28)}
            color={isFocusTele ? color.active : color.defText}
          />
        }
        containerStyle={Style.containorMarginToTop}
        onFocus={() => setFocusTele(true)}
        onBlur={() => setFocusTele(false)}
        onChangeText={(tele) => {
          checkTelePhone(tele) ? setTeleStatus(true) : setTeleStatus(false)
        }}
      />
      <View style={Style.centerContainor}>
        <BaseElementsInput
          placeholder="短信验证码"
          leftIcon={
            <MyIcon
              name="suozi-copy"
              size={pxToDp(28)}
              color={isFocusCode ? color.active : color.defText}
            />
          }
          containerStyle={Style.codeInput}
          onFocus={() => setFocusCode(true)}
          onBlur={() => setFocusCode(false)}
          errorMessage={codeIsError ? '验证码有误，请核对' : ''}
          onChangeText={(code) => {
            checkCode(code) ? setCodeStatus(true) : setCodeStatus(false)
          }}
        />
        <Button
          title={clock === 0 ? '获取验证码' : clock + 's后重发'}
          disabled={!getCodeIsAble()}
          disabledStyle={Style.smallBtndisabledStyle}
          containerStyle={Style.getCodeBtnContainor}
          buttonStyle={{
            ...Style.getCodeBtn,
            borderColor: getCodeIsAble() ? color.active : color.defBut
          }}
          titleStyle={{
            color: getCodeIsAble() ? color.active : color.defBut
          }}
          onPress={getCode}
        />
      </View>
      <BaseButton
        title="完成"
        buttonStyle={Style.submitButton}
        containerStyle={{
          ...Style.centerContainor,
          ...Style.buttonMarginTop
        }}
        disabled={!getFinnshButtonIsAble()}
        onPress={submitSignUpReq}
      />
    </>
  )
}
