import { omit } from 'lodash'

const baseFlex = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

export const layout = {
  margin: (...args) => ({
    marginTop: args[0],
    marginRight: args[1],
    marginBottom: args[2],
    marginLeft: args[3]
  }),
  padding: (...args) => ({
    paddingTop: args[0],
    paddingRight: args[1],
    paddingBottom: args[2],
    paddingLeft: args[3]
  }),
  border: (...args) => ({
    borderWidth: args[0],
    borderStyle: args[1],
    borderColor: args[2]
  }),
  // 函数和纯mixin最好分开，暂时想不出来好的命名（$_$）
  flexRow: () => ({ ...baseFlex }),
  flexColumn: () => ({
    flexDirection: 'column',
    ...omit(baseFlex, ['flexDirection'])
  })
}
