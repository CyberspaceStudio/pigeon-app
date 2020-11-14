import React, { useState, useEffect } from 'react'

import { Text, View } from 'react-native'

import { Button, Tile, Input, Overlay } from 'react-native-elements'
import { Formik } from 'formik'

import TilePng from '../../asserts/images/tile.png'
import style from './style'

const Login = () => {
  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Text>hello</Text>
      </View>
    </View>
  )
}
export default Login

/*

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

*/
