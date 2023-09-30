import { createTheme } from '@rneui/themed'
import spacing from '../spacing'

const theme = createTheme({
  mode: 'light',
  lightColors: {
    primary: '#005C53',
    secondary: '#DBF227',
    accent: '#D6D58E',
    background: '#F4F4FB',
  },
  darkColors: {
    primary: '#000',
  },
  spacing,
})

export default theme