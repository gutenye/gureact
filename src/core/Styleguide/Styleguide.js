import React from 'react'
import styled from 'styled-components'

/**
 * <Styleguide>
 *   <Styleguide.Section title="Basic">
 *     <Button />
 *   ...
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

const Section = ({ title, children, ...props }) =>
  <SectionRoot {...props}>
    <h3 className="header">
      {title}
    </h3>
    <div>
      {children}
    </div>
  </SectionRoot>

const SectionRoot = styled.div`
  margin: 0 40px 40px 0;
  width: 395px;
  padding: 0 10px 10px 10px;
  background-color: #dddfe2;

  > .header {
    margin-bottom: 10px;

    &::before {
      display: block;
      content: '';
      width: 30%;
      border-top: 4px solid ${p => p.theme.primary};
      margin-bottom: 3px;
    }
  }
`

Styleguide.Section = Section

export default Styleguide
