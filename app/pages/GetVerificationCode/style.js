import { StyleSheet } from 'react-native'
import { pxToDp, deviceWidthDp, Color } from '../../style'

export const color = {
  active: Color.buttonActiveColor,
  defText: Color.placeholderTextColor,
  defBut: Color.buttonDisabledColor
}

export default StyleSheet.create({
  input: {
    borderBottomColor: color.active,
    borderBottomWidth: 1,
    borderWidth: 2,
    width: 300,
    color: color.active
  },
  codeInput: {
    width: deviceWidthDp / 2
  },
  getCodeBtnContainor: {
    flex: 1,
    width: deviceWidthDp / 2,
    paddingLeft: pxToDp(30),
    paddingRight: pxToDp(30)
  },
  getCodeBtn: {
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderWidth: 1,
    marginTop: 5
  },
  centerContainor: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  submitButton: {
    width: deviceWidthDp - pxToDp(20),
    height: 45,
    backgroundColor: color.active
  },
  containorMarginToTop: {
    marginTop: 50
  },
  buttonMarginTop: {
    marginTop: 20
  },
  smallBtndisabledStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0)'
  }
})
