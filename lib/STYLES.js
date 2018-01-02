import React from 'react'
import styled from 'styled-components'

export default () => (
  <Root>
    <div>
      <Primary>primary</Primary>
      <Secondary>secondary</Secondary>
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
      <TextPrimaryOnSecondary>textPrimaryOnSecondary</TextPrimaryOnSecondary>
      <TextSecondaryOnSecondary>textSecondaryOnSecondary</TextSecondaryOnSecondary>
      <TextHitOnSecondary>textHitOnSecondary</TextHitOnSecondary>
      <TextDisabledOnSecondary>textDisabledOnSecondary</TextDisabledOnSecondary>
      <TextIconOnSecondary>textIconOnSecondary</TextIconOnSecondary>
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
const Secondary = styled.span`color: ${p => p.theme.secondary};`
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

const TextPrimaryOnSecondary = styled.span`
  background-color: ${p => p.theme.secondary};
  color: ${p => p.theme.textPrimaryOnSecondary};
`
const TextSecondaryOnSecondary = styled.span`
  background-color: ${p => p.theme.secondary};
  color: ${p => p.theme.textSecondaryOnSecondary};
`
const TextHitOnSecondary = styled.span`
  background-color: ${p => p.theme.secondary};
  color: ${p => p.theme.textHitOnSecondary};
`
const TextDisabledOnSecondary = styled.span`
  background-color: ${p => p.theme.secondary};
  color: ${p => p.theme.textDisabledOnSecondary};
`
const TextIconOnSecondary = styled.span`
  background-color: ${p => p.theme.secondary};
  color: ${p => p.theme.textIconOnSecondary};
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
