import React from 'react'
import styled from 'styled-components'
import { MdWifi, MdBluetooth } from 'react-icons'
import IconSignal from './signal.svg'
import IconBattery from './battery.svg'

const Statusbar = () => {
  return (
    <Root>
      <IconSignal className="signal" />
      <span>Carrier</span>
      <MdWifi className="wifi" />
      <span className="center">11:14 AM</span>
      <MdBluetooth className="bluetooth" />
      <span>100%</span>
      <IconBattery className="battery" />
    </Root>
  )
}

const Root = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  background-color: white;

  > * {
    margin-right: 4px;
    &:first-child {
      margin-left: 4px;
    }
  }

  .signal {
    width: 33.5px;
    height: 5.5px;
  }

  .wifi {
    width: 14px;
    height: 14px;
  }

  .bluetooth {
    opacity: 0.4;
    width: 16px;
    height: 16px;
  }

  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    font-weight: 500;
  }

  .battery {
    width: 24.5px;
    height: 24.5px;
  }
`

export default Statusbar
