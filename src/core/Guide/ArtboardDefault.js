import React from 'react'
import styled from 'styled-components'
import { castArray } from 'lodash'

type props = {
  title: string,
  /** white: white background instead of transperent */
  type?: string,
  className?: string,
  style?: Object,
  children: any,
}

const ArtboardDefault = ({ title, children, ...rest }) => {
  return (
    <Root {...rest}>
      <h3 className="Styleguide-header">{title}</h3>
      <div>
        {castArray(children).map((v, i) => (
          <div key={i} className="Styleguide-item">
            {v}
          </div>
        ))}
      </div>
    </Root>
  )
}

const Root = styled.div`
  margin: 0 40px 40px 0;
  width: 395px;
  padding: 0 10px 10px 10px;
  background-color: ${p => (p.type ? 'white' : 'transparent')};

  .Styleguide-header {
    margin-bottom: 10px;

    &::before {
      display: block;
      content: '';
      width: 30%;
      border-top: 4px solid ${p => p.theme.primary};
      margin-bottom: 3px;
    }
  }

  .Styleguide-item {
    margin-top: 10px;
  }
`

export default ArtboardDefault
