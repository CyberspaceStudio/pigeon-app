import React from 'react'
import { StyleSheet } from 'react-native'
import { pxToDp } from '../../style/unit'
import { warning } from './index'

const setColor = (warning) => {
  if (warning) {
    return '#FF2525'
  } else {
    return '#909090'
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: pxToDp(31),
    marginBottom: pxToDp(344)
  },
  input: {
    height: pxToDp(31),
    marginLeft: pxToDp(11),
    marginRight: pxToDp(11),
    marginBottom: pxToDp(24),
    borderBottomWidth: 1.5,
    borderBottomColor: '#E0E0E0'
  },
  confirm: {
    height: pxToDp(31),
    marginLeft: pxToDp(11),
    marginRight: pxToDp(11),
    marginBottom: pxToDp(11),
    borderBottomWidth: 1.5,
    borderBottomColor: '#E0E0E0'
  },
  text: {
    width: pxToDp(285),
    height: pxToDp(20),
    marginLeft: pxToDp(14),
    marginRight: pxToDp(59),
    marginBottom: pxToDp(39),
    fontSize: pxToDp(10),
    color: setColor(warning)
  },
  button: {
    height: pxToDp(45),
    marginLeft: pxToDp(11),
    marginRight: pxToDp(10)
  }
})

export default styles
