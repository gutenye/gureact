import { styled, mobileOnly, tablet, desktop } from '../vendor'

export const Left = styled.div``
export const Right = styled.div``

export const Content = styled.div`
  background-color: white;
  margin-top: 24px;
  padding: 24px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  ${tablet} {
    display: flex;

    ${Left} {
      width: 70%;
      padding-right: 2rem;
    }

    ${Right} {
      width: 30%;
    }
  }

  ${desktop} {
    margin-left: 24px;
    margin-right: 24px;
  }
`

Content.Left = Left
Content.Right = Right
