import { StyleSheet } from 'react-native'
import { layout, pxToDp, deviceHeightDp, deviceWidthDp } from '../../style'

export default StyleSheet.create({
  container: {
    width: deviceWidthDp,
    height: deviceHeightDp,
    ...layout.flexColumn(),
    justifyContent: 'flex-start'
  },
  logoContainer: {
    width: pxToDp(176),
    height: pxToDp(176),
    backgroundColor: 'white',
    borderRadius: pxToDp(176 / 2),
    marginTop: pxToDp(20),
    transform: [{ scaleX: 188 / 176 }],
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowColor: '#7AB8FB',
    shadowRadius: 10,
    ...layout.flexRow()
  },
  logo: {
    width: pxToDp(130),
    height: pxToDp(104)
  },
  logoHide: {
    width: pxToDp(167),
    height: pxToDp(153)
  },
  formContainer: {
    width: pxToDp(327),
    height: pxToDp(327),
    borderRadius: pxToDp(327 / 2),
    transform: [{ scaleX: 581 / 327 }],
    marginTop: pxToDp(-38),
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowColor: '#7AB8FB',
    shadowRadius: 10,
    zIndex: 1,
    backgroundColor: '#ffffff'
  },
  panel: {
    ...layout.flexRow(),
    position: 'absolute',
    bottom: pxToDp(33)
  },
  panelItem: {
    fontSize: pxToDp(14),
    color: '#909090'
  },
  divider: {
    width: 0,
    height: pxToDp(15),
    ...layout.border(StyleSheet.hairlineWidth, 'solid', '#909090'),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10)
  },
  form: {
    width: pxToDp(310),
    marginTop: pxToDp(-252),
    zIndex: 2,
    ...layout.flexColumn
  },
  input: {
    width: pxToDp(270),
    height: pxToDp(45),
    fontSize: pxToDp(14),
    marginLeft: pxToDp(20),
    marginTop: pxToDp(20),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbbbbb'
  },
  button: {
    width: pxToDp(240),
    height: pxToDp(36),
    backgroundColor: '#0289FA',
    borderRadius: pxToDp(18)
  },
  buttonTitle: {
    fontSize: pxToDp(16)
  },
  loginButtonContainer: {
    width: pxToDp(240),
    height: pxToDp(36),
    marginLeft: pxToDp(35),
    marginTop: pxToDp(32),
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 1,
    shadowColor: '#7AB8FB',
    shadowRadius: 40
  }
})
