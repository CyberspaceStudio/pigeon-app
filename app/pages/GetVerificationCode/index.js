/* eslint-disable semi */
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-elements'
import { View } from 'react-native'
import MyIcon from '../../asserts/fonts/customIcon'
import BaseElementsInput from '../../components/BaseElementsInput'
import BaseButton from '../../components/BaseButton'

import { pxToDp } from '../../style/unit'
import Style, { color } from './style'

export default () => {
    const [isFocusTele, changeFocusTele] = useState(true)
    const [isFocusCode, changeFocusCode] = useState(false)
    const [inputTeleStatus, changeTeleStatus] = useState(false)
    const [inputCodeStatus, changeCodeStatus] = useState(false)
    const [clock, changeClock] = useState(0)
    const [codeIsError, changecodeIsError] = useState(false)

    const checkTelePhone = (tele) => /^[0-9]{11}$/.test(tele)
    const checkCode = (code) => /^[0-9]{6}$/.test(code)

    const getCodeIsAble = () => inputTeleStatus && clock === 0
    const getFinnshButtonIsAble = () => inputCodeStatus && inputTeleStatus

    const getCode = () => {
        changeClock(60)
    }
    useEffect(() => {
        let hander
        if (clock !== 0) {
            hander = setTimeout(() => {
                changeClock(clock - 1)
                clearTimeout(hander)
            }, 1000)
        }
    }, [clock])

    const submitSignUpReq = () => {
        // 发送请求，再改变错误信息
        changecodeIsError(!codeIsError)
    }
})

export default () => {
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
                onFocus={() => changeFocusTele(true)}
                onBlur={() => changeFocusTele(false)}
                onChangeText={(tele) => {
                    checkTelePhone(tele)
                        ? changeTeleStatus(true)
                        : changeTeleStatus(false)
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
                    onFocus={() => changeFocusCode(true)}
                    onBlur={() => changeFocusCode(false)}
                    errorMessage={codeIsError ? '验证码有误，请核对' : ''}
                    onChangeText={(code) => {
                        checkCode(code) ? changeCodeStatus(true) : changeCodeStatus(false)
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
