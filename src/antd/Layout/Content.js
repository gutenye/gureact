import styled from 'styled-components'
import s from '../../theme'

export const Left = styled.div``
export const Right = styled.div``

export const Content = styled.div`
  background-color: white;
  margin-top: 24px;
  padding: 24px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  ${s.tabletMin} {
    display: flex;

    ${Left} {
      width: 70%;
      padding-right: 2rem;
    }

    ${Right} {
      width: 30%;
    }
  }

  ${s.desktopMin} {
    margin-left: 24px;
    margin-right: 24px;
  }
`

Content.Left = Left
Content.Right = Right
