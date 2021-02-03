// @flow
import React from 'react'
import styled from 'styled-components'
import { sum, reduce } from 'lodash'

class StockQtyEdit extends React.Component {
  props: {}

  state = {
    output: {
      L: { 大红: 0, 蓝色: 0, 绿色: 0, 黑色: 0 },
      XL: { 大红: 0, 蓝色: 0, 绿色: 0, 黑色: 0 },
    },
  }

  render() {
    const { output } = this.state
    const options = [
      { name: 'Size', values: ['L', 'XL'] },
      { name: 'Color', values: ['大红', '蓝色', '绿色', '黑色'] },
    ]
    const variants = {
      L: { 大红: 1, 蓝色: 1, 绿色: 2, 黑色: 1 },
      XL: { 大红: 1, 蓝色: 1, 绿色: 2, 黑色: 1 },
    }
    const sizes = options[0].values
    const colors = options[1].values
    function sumSize(colorMap) {
      return sum(Object.values(colorMap))
    }
    const colorMap = reduce(
      variants,
      (obj, v) => {
        colors.forEach((color) => {
          obj[color] = (obj[color] || 0) + v[color]
        })
        return obj
      },
      {}
    )

    return (
      <Table>
        <thead>
          <tr>
            <th />
            {colors.map((color) => (
              <th key={color}>{color}</th>
            ))}
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((size, i) => [
            <tr key={`${i}1`}>
              <td>{size}</td>
              {colors.map((color) => (
                <td key={color}>
                  <input
                    type="number"
                    value={output[size][color]}
                    onChange={this.onUpdate(size, color)}
                  />
                </td>
              ))}
              <td>{sumSize(output[size])}</td>
            </tr>,
            <tr key={`${i}2`}>
              <td />
              {colors.map((color) => (
                <td key={color}>{variants[size][color]}</td>
              ))}
            </tr>,
          ])}
          <tr>
            <td>合计</td>
            {colors.map((color) => (
              <td key={color}>{colorMap[color]}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    )
  }

  onUpdate = (size: string, color: string) => {
    return (e: any) => {
      const { output } = this.state
      output[size][color] = e.target.valueAsNumber
      this.setState({ output })
    }
  }
}

const Table = styled.table``

export default StockQtyEdit
