import React from 'react'
import { Button } from 'react-native-elements'
import Style from './style'

export default (props) => (
  <Button
    disabledStyle={(Style.disabledStyle, { ...props.disabledStyle })}
    disabledTitleStyle={
      (Style.disabledTitleStyle, { ...props.disabledTitleStyle })
    }
    {...props}
  />
)
