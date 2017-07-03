import React from 'react'
import styled from 'styled-components'
import { castArray } from 'lodash'

/**
 * <Styleguide>
 *   <Styleguide.Section title="Basic">
 *     <Styleguide.Item>
 *      ...
 */
const Styleguide = styled.div`
  display: flex;
  flex-wrap: wrap;
`

type props = {
  title: string,
  className?: string,
  style?: Object,
  children: any,
}

const Section = ({ title, children, ...props }) => {
  return (
    <SectionRoot {...props}>
      <h3 className="Styleguide-header">
        {title}
      </h3>
      <div>
        {castArray(children).map((v, i) =>
          <div key={i} className="Styleguide-item">
            {v}
          </div>
        )}
      </div>
    </SectionRoot>
  )
}

const SectionRoot = styled.div`
  margin: 0 40px 40px 0;
  width: 395px;
  padding: 0 10px 10px 10px;
  background-color: #dddfe2;

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

Styleguide.Section = Section

export default Styleguide
