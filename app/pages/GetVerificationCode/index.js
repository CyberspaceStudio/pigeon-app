/* eslint-disable semi */
import React from 'react'
import { Input, Button } from 'react-native-elements'
import { View } from 'react-native'
import MyIcon from '../../asserts/fonts/customIcon'

import { pxToDp, deviceWidthDp, deviceHeightDp } from '../../style/unit'
import Style, { color } from './style'

export default () => {
  const [isFocusTele, changeFocusTele] = React.useState(true)
  const [isFocusCode, changeFocusCode] = React.useState(false)
  const [inputTeleStatus, changeTeleStatus] = React.useState(false)
  const [inputCodeStatus, changeCodeStatus] = React.useState(false)
  const [clock, changeClock] = React.useState(0)

  const checkTelePhone = (tele) => /^[0-9]{11}$/.test(tele)
  const checkCode = (code) => /^[0-9]{6}$/.test(code)

  const getCodeIsAble = () => inputTeleStatus && clock === 0
  const getFinnshButtonIsAble = () => inputCodeStatus && inputTeleStatus

  const getCode = () => {
    changeClock(60)
  }
  React.useEffect(() => {
    if (clock !== 0) {
      setTimeout(() => {
        changeClock(clock - 1)
      }, 1000)
    }
  }, [clock])

  const [errMessage, changeErrorMessage] = React.useState('')
  const submitSignUpReq = () => {
    // 发送请求，在改变错误信息
    changeErrorMessage('验证码有误，请核对')
  }

  return (
    <>
      <View style={{ marginTop: 50 }}>
        <Input
          placeholder="手机号码"
          autoFocus={true}
          leftIcon={
            <MyIcon
              name="suozi-copy"
              size={pxToDp(28)}
              color={isFocusTele ? color.active : color.defText}
            />
          }
          style={{ color: color.defText }}
          selectionColor={color.active}
          onFocus={() => changeFocusTele(true)}
          onBlur={() => changeFocusTele(false)}
          onChangeText={(tele) => {
            checkTelePhone(tele)
              ? changeTeleStatus(true)
              : changeTeleStatus(false)
          }}
        />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={Style.codeInput}>
          <Input
            placeholder="短信验证码"
            leftIcon={
              <MyIcon
                name="shouji"
                size={pxToDp(28)}
                color={isFocusCode ? color.active : color.defText}
              />
            }
            style={{ color: color.defText }}
            selectionColor={color.active}
            onFocus={() => changeFocusCode(true)}
            onBlur={() => changeFocusCode(false)}
            errorMessage={errMessage}
            errorStyle={{
              color: '#FF2525',
              fontSize: 16
            }}
            onChangeText={(code) => {
              checkCode(code) ? changeCodeStatus(true) : changeCodeStatus(false)
            }}
          />
        </View>
        <View style={Style.getCodeBtnContainor}>
          <Button
            title={clock === 0 ? '获取验证码' : clock + 's后重发'}
            disabled={!getCodeIsAble()}
            disabledStyle={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
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
      </View>
      <View
        style={{
          ...Style.centerContainor,
          marginTop: 20
        }}
      >
        <Button
          title="完成"
          buttonStyle={{
            width: deviceWidthDp - pxToDp(20),
            height: 45,
            backgroundColor: color.active
          }}
          disabled={!getFinnshButtonIsAble()}
          disabledStyle={{ color: color.defBut }}
          disabledTitleStyle={{ color: 'white' }}
          onPress={submitSignUpReq}
        />
      </View>
    </>
  )
}
