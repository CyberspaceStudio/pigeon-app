/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react'

import { Text, PermissionsAndroid } from 'react-native'

import { Button, Tile, Input, Overlay } from 'react-native-elements'
import { Formik } from 'formik'

import TilePng from '../../asserts/images/tile.png'
import style from './style'

const App = () => {
  const [visible, setVisible] = useState(false)

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      )

      console.log(granted, '------')

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera')
      } else {
        console.log('Camera permission denied')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  useEffect(() => {
    requestCameraPermission()
  }, [])

  return (
    <>
      <Tile
        imageSrc={TilePng}
        title="Find校园轻社交"
        icon={{ name: 'play-circle', type: 'font-awesome' }}
      />
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <Input
              type="email"
              name="email"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <Button title="点击提交" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button
        title="点击弹窗"
        buttonStyle={style.button}
        onPress={() => setVisible(!visible)}
      />
      <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
        <>
          <Text>这里是弹窗</Text>
          <Button title="确认" />
        </>
      </Overlay>
    </>
  )
}
export default App
