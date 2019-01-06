import React from 'react'
import styled from 'styled-components'

const Color = ({ code, label }) => (
  <ColorRoot>
    <div className={`color ${code}`} />
    <div>{label}</div>
  </ColorRoot>
)

const ColorRoot = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  .color {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  .primary {
    background-color: ${p => p.theme.primary};
  }
  .secondary {
    background-color: ${p => p.theme.secondary};
  }
`

export default Color
