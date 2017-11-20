import React from 'react'
import styled from 'styled-components'

export default () => (
  <Root>
    <div>
      <Primary>primary</Primary>
      <Accent>accent</Accent>
      <Background>background</Background>
    </div>
    <div>
      <TextPrimaryOnPrimary>textPrimaryOnPrimary</TextPrimaryOnPrimary>
      <TextSecondaryOnPrimary>textSecondaryOnPrimary</TextSecondaryOnPrimary>
      <TextHitOnPrimary>textHitOnPrimary</TextHitOnPrimary>
      <TextDisabledOnPrimary>textDisabledOnPrimary</TextDisabledOnPrimary>
      <TextIconOnPrimary>textIconOnPrimary</TextIconOnPrimary>
    </div>
    <div>
      <TextPrimaryOnAccent>textPrimaryOnAccent</TextPrimaryOnAccent>
      <TextSecondaryOnAccent>textSecondaryOnAccent</TextSecondaryOnAccent>
      <TextHitOnAccent>textHitOnAccent</TextHitOnAccent>
      <TextDisabledOnAccent>textDisabledOnAccent</TextDisabledOnAccent>
      <TextIconOnAccent>textIconOnAccent</TextIconOnAccent>
    </div>
    <div>
      <TextPrimaryOnBackground>textPrimaryOnBackground</TextPrimaryOnBackground>
      <TextSecondaryOnBackground>
        textSecondaryOnBackground
      </TextSecondaryOnBackground>
      <TextHitOnBackground>textHitOnBackground</TextHitOnBackground>
      <TextDisabledOnBackground>
        textDisabledOnBackground
      </TextDisabledOnBackground>
      <TextIconOnBackground>textIconOnBackground</TextIconOnBackground>
    </div>
  </Root>
)

const Root = styled.div`
  span {
    margin-right: 5px;
  }
`
const Primary = styled.span`color: ${p => p.theme.primary};`
const Accent = styled.span`color: ${p => p.theme.accent};`
const Background = styled.span`color: ${p => p.theme.background};`

const TextPrimaryOnPrimary = styled.span`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.textPrimaryOnPrimary};
`
const TextSecondaryOnPrimary = styled.span`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.textSecondaryOnPrimary};
`
const TextHitOnPrimary = styled.span`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.textHitOnPrimary};
`
const TextDisabledOnPrimary = styled.span`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.textDisabledOnPrimary};
`
const TextIconOnPrimary = styled.span`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.textIconOnPrimary};
`

const TextPrimaryOnAccent = styled.span`
  background-color: ${p => p.theme.accent};
  color: ${p => p.theme.textPrimaryOnAccent};
`
const TextSecondaryOnAccent = styled.span`
  background-color: ${p => p.theme.accent};
  color: ${p => p.theme.textSecondaryOnAccent};
`
const TextHitOnAccent = styled.span`
  background-color: ${p => p.theme.accent};
  color: ${p => p.theme.textHitOnAccent};
`
const TextDisabledOnAccent = styled.span`
  background-color: ${p => p.theme.accent};
  color: ${p => p.theme.textDisabledOnAccent};
`
const TextIconOnAccent = styled.span`
  background-color: ${p => p.theme.accent};
  color: ${p => p.theme.textIconOnAccent};
`

const TextPrimaryOnBackground = styled.span`
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.textPrimaryOnBackground};
`
const TextSecondaryOnBackground = styled.span`
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.textSecondaryOnBackground};
`
const TextHitOnBackground = styled.span`
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.textHitOnBackground};
`
const TextDisabledOnBackground = styled.span`
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.textDisabledOnBackground};
`
const TextIconOnBackground = styled.span`
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.textIconOnBackground};
`
