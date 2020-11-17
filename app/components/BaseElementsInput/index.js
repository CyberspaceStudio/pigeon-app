import React from 'react'
import { Input } from 'react-native-elements'
import Style from './style'

export default (props) => (
  <Input
    selectionColor={'#909090'}
    errorStyle={Style.inputErrorStyle}
    style={Style.inputStyle}
    {...props}
  />
)
