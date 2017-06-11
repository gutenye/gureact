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

const Section = ({ title, children }) =>
  <SectionRoot>
    <h3 className="header">{title}</h3>
    <div>
      {children}
    </div>
  </SectionRoot>

const SectionRoot = styled.div`
  margin-right: 40px;

  > .header {
    border-top: 2px solid black;
  }
`

Styleguide.Section = Section

export default Styleguide
