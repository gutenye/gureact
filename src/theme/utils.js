import tinycolor from 'tinycolor2'
import { reduce } from 'lodash'

/**
 * Determine whether to use dark or light text on top of given color.
 * Returns "dark" for dark text and "light" for light text.
 */
export function lightOrDark(color) {
  const minimumContrast = 3.1
  const lightContrast = tinycolor.readability(color, 'white')
  const darkContrast = tinycolor.readability(color, 'rgba(0, 0, 0, .87)')
  if (lightContrast < minimumContrast && darkContrast > lightContrast) {
    return 'dark'
  } else {
    return 'light'
  }
}

export function genTones(colors) {
  return reduce(
    colors,
    (result, color, name) => {
      result[name] = lightOrDark(color)
      return result
    },
    {}
  )
}

export const textColors = {
  dark: {
    primary: 'rgba(0, 0, 0, .87)',
    secondary: 'rgba(0, 0, 0, .54)',
    hint: 'rgba(0, 0, 0, .38)',
    disabled: 'rgba(0, 0, 0, .38)',
    icon: 'rgba(0, 0, 0, .38)',
  },
  light: {
    primary: 'white',
    secondary: 'rgba(255, 255, 255, .7)',
    hint: 'rgba(255, 255, 255, .5)',
    disabled: 'rgba(255, 255, 255, .5)',
    icon: 'rgba(255, 255, 255, .5)',
  },
}

export const fontWeightValues = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
}
