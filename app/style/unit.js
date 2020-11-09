import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const uiWidthPx = 360
export const deviceWidthDp = width
export const deviceHeightDp = height

export const pxToDp = uiElementPx => {
    return uiElementPx * (deviceWidthDp / uiWidthPx)
}
