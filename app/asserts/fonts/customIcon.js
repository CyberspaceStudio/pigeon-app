import { createIconSet } from 'react-native-vector-icons'
import iconJson from './iconfont.json'

const familyName = 'iconfont'

const newJson = {}
for (let i = 0; i < iconJson.glyphs.length; i++) {
  newJson[iconJson.glyphs[i]['font_class']] =
    iconJson.glyphs[i]['unicode_decimal']
}

const iconSet = createIconSet(newJson, familyName, 'iconfont.ttf')

export default iconSet

export const {
  Button,
  TabBarItem,
  TabBarItemIOS,
  getImageSource,
  getImageSourceSync
} = iconSet
