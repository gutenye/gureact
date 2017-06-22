import { genTones, textColors } from './utils'

export const primary = '#3a5795' // Blue
export const primaryLight = '#6d85ca'
export const primaryDark = '#00306a'
export const accent = '#33bb55' // Green
export const accentLight = '#6eee84'
export const accentDark = '#008a28'
export const background = '#fff' // White

const tones = genTones({ primary, accent, background })

export const textPrimaryOnPrimary = textColors[tones.primary]['primary']
export const textSecondaryOnPrimary = textColors[tones.primary]['secondary']
export const textHitOnPrimary = textColors[tones.primary]['hit']
export const textDisabledOnPrimary = textColors[tones.primary]['disabled']
export const textIconOnPrimary = textColors[tones.primary]['icon']

export const textPrimaryOnAccent = textColors[tones.accent]['primary']
export const textSecondaryOnAccent = textColors[tones.accent]['secondary']
export const textHitOnAccent = textColors[tones.accent]['hit']
export const textDisabledOnAccent = textColors[tones.accent]['disabled']
export const textIconOnAccent = textColors[tones.accent]['icon']

export const textPrimaryOnBackground = textColors[tones.background]['primary']
export const textSecondaryOnBackground =
  textColors[tones.background]['secondary']
export const textHitOnBackground = textColors[tones.background]['hit']
export const textDisabledOnBackground = textColors[tones.background]['disabled']
export const textIconOnBackground = textColors[tones.background]['icon']
