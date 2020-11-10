/* eslint-disable semi */
import React from 'react'
import { Input, Button, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createIconSet } from 'react-native-vector-icons'
import { StyleSheet, TextInput, View } from 'react-native'
import im from '../../asserts/icons/navigator_mine_active.png'
import icoMoonConfig from '../../asserts/icons/iconfont.json'

const MyIcon = createIconSet(
  {
    lianxiren: 58883,
    pingyouquan: 58884
  },
  'myIcon',
  'iconfont.ttf'
)

const color = {
  active: '#0289FA',
  defText: '#909090',
  defBut: '#E0E0E0'
}

const style = StyleSheet.create({
  input: {
    borderBottomColor: color.active,
    borderBottomWidth: 1,
    borderWidth: 2,
    width: 300,
    color: color.active
  }
})

export default () => {
  return (
    <>
      <View style={style.input}>
        <TextInput placeholder="Native TextInput" />
      </View>
      <MyIcon name="lianxiren" size={24} color={color.active} />
      <Input
        placeholder="BASIC INPUT"
        label="A Basic Input"
        selectionColor={color.active}
        // onEndEditing={(s) => {console.log(s)}}
        // onBlur={() => console.log("input onblur")}
        // underlineColorAndroid={color.active}
        inputStyle={style.input}
        containerStyle={style.input}
      />

      <Input
        placeholder="INPUT WITH ICON"
        autoFocus={true}
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      />
      <Image
        source={require('../../asserts/icons/navigator_mine_active.png')}
        style={{ width: 50, height: 50 }}
      />
      <Input
        placeholder="INPUT WITH MY ICON"
        autoFocus={true}
        leftIcon={
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
      />

      <Input
        placeholder="INPUT WITH CUSTOM ICON"
        leftIcon={<MyIcon name="pingyouquan" size={30} color="black" />}
      />

      <Input
        placeholder="Comment"
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        onChangeText={(value) => this.setState({ comment: value })}
      />

      <Input
        placeholder="INPUT WITH ERROR MESSAGE"
        errorStyle={{ color: 'red' }}
        errorMessage="ENTER A VALID ERROR HERE"
      />

      <Input placeholder="Password" secureTextEntry={true} />
    </>
  )
}
