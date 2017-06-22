import { styled } from 'vendor'
import { fontWeightValues } from './utils'

export const Typography = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`

export const Display4 = styled.div`
  font-size: 7rem; /* 112sp */
  line-height: 7rem; /* 112sp */
  font-weight: ${fontWeightValues.light};
  letter-spacing: -.04em;
`
//margin: -1rem 0 3.5rem -.085em; /* -16sp 0 56sp -.085em */

export const Display3 = styled.div`
  font-size: 3.5rem; /* 56px */
  line-height: 3.5rem; /* 56px */
  font-weight: ${fontWeightValues.regular};
  letter-spacing: -.02em;
`
//margin: -8px 0 64px -.07em;

export const Display2 = styled.div`
  font-size: 2.813rem; /* 45px */
  line-height: 3rem; /* 48px */
  font-weight: ${fontWeightValues.regular};
  letter-spacing: normal;
`
//margin: -.5rem 0 4rem -.07em; /* -8sp 0 64sp -.07em */

export const Display1 = styled.div`
  font-size: 2.125rem; /* 34sp */
  line-height: 2.5rem; /* 40sp */
  font-weight: ${fontWeightValues.regular};
  letter-spacing: normal;
`
//margin: -.5rem 0 4rem -.07em; /* -8sp 0 64sp -.07em */

export const Headline = styled.div`
  font-size: 1.5rem; /* 24sp */
  line-height: 2rem; /* 32sp */
  font-weight: ${fontWeightValues.regular};
  letter-spacing: normal;
`
//margin: -.5rem 0 1rem -.06em; /* -8sp 0 16sp -.06em */

export const Title = styled.div`
  font-size: 1.25rem; /* 20sp */
  line-height: 2rem; /* 32sp */
  font-weight: ${fontWeightValues.medium};
  letter-spacing: .02em;
  margin: .5rem 0;
  text-align: ${p => (p.center ? 'center' : 'inherit')};
`
//margin: -.5rem 0 1rem -.05em; /* -8sp 0 16sp -.05em */

export const Subheading2 = styled.div`
  font-size: 1rem; /* 16sp */
  line-height: 1.75rem; /* 28sp */
  font-weight: ${fontWeightValues.regular};
  letter-spacing: .04em;
`
//margin: -.5rem 0 1rem -.06em; /* -8sp 0 16sp -.06em */

export const Subheading1 = styled.div`
  font-size: .938rem; /* 15sp */
  line-height: 1.5rem; /* 24sp */
  font-weight: ${fontWeightValues.regular};
  letter-spacing: .04em;
`
//margin: -.313rem 0 .813rem -.06em;

export const Body2 = styled.div`
  font-size: .875rem; /* 14sp */
  line-height: 1.5rem; /* 24sp */
  font-weight: ${fontWeightValues.medium};
  letter-spacing: .04em;
`
//margin: -.25rem 0 .75rem 0; /* -4sp 0 12sp 0 */

export const Body1 = styled.div`
  font-size: .875rem; /* 14sp */
  line-height: 1.25rem; /* 20sp */
  font-weight: ${fontWeightValues.regular};
  letter-spacing: .04em;
`
//margin: -.25rem 0 .75rem 0; /* -4sp 0 12sp 0 */

export const Caption = styled.div`
  font-size: .75rem; /* 12sp */
  line-height: 1.25rem; /* 20sp */
  font-weight: ${fontWeightValues.regular};
  letter-spacing: .08em;
`
//margin: -.5rem 0 1rem -.04em; /* -8sp 0 16sp -.04em */
