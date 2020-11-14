import { StyleSheet } from 'react-native'
import { layout, pxToDp, deviceHeightDp, deviceWidthDp } from '../../style'

export default StyleSheet.create({
  container: {
    width: deviceWidthDp,
    height: deviceHeightDp,
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: pxToDp(188),
    height: pxToDp(188),
    backgroundColor: 'white',
    ...layout.border(pxToDp(1), 'solid', 'black'),
    borderRadius: pxToDp(188 / 2),
    marginTop: pxToDp(20)
  }
})
