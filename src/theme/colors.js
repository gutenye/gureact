import { genTones, textColors } from './utils'

export const primary = '#3a5795' // Blue
export const primaryLight = '#6d85ca'
export const primaryDark = '#00306a'
export const secondary = '#33bb55' // Green
export const secondaryLight = '#6eee84'
export const secondaryDark = '#008a28'
export const background = '#fff' // White

const tones = genTones({ primary, secondary, background })

export const textPrimaryOnPrimary = textColors[tones.primary]['primary']
export const textSecondaryOnPrimary = textColors[tones.primary]['secondary']
export const textHitOnPrimary = textColors[tones.primary]['hit']
export const textDisabledOnPrimary = textColors[tones.primary]['disabled']
export const textIconOnPrimary = textColors[tones.primary]['icon']

export const textPrimaryOnSecondary = textColors[tones.secondary]['primary']
export const textSecondaryOnSecondary = textColors[tones.secondary]['secondary']
export const textHitOnSecondary = textColors[tones.secondary]['hit']
export const textDisabledOnSecondary = textColors[tones.secondary]['disabled']
export const textIconOnSecondary = textColors[tones.secondary]['icon']

export const textPrimaryOnBackground = textColors[tones.background]['primary']
export const textSecondaryOnBackground =
  textColors[tones.background]['secondary']
export const textHitOnBackground = textColors[tones.background]['hit']
export const textDisabledOnBackground = textColors[tones.background]['disabled']
export const textIconOnBackground = textColors[tones.background]['icon']
