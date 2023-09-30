import colors from '../colors'
import spacing from '../spacing'

const getTheme = mode => ({
  colors: mode === 'light' ? colors.light : colors.dark,
  spacing,
})

export default getTheme