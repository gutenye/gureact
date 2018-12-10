import React from 'react'
import selectHoc from 'react-table/lib/hoc/selectTable'
import ReactTable, { TableProps } from 'react-table'
import { without } from 'lodash'

/**
 * <Table
 *   value onChange
 *   keyField: 'title',
 *   columns, data
 */

interface Props extends TableProps {
  value: any
  onChange: any
  keyField: string
}

const SelectReactTable = selectHoc(ReactTable)

class SelectTable extends React.Component<Props> {
  selectTable: any

  state = {
    selectAll: false,
  }

  render() {
    const { value, onChange, keyField, ...rest } = this.props
    const { selectAll } = this.state
    const props = {
      ...rest,
      keyField,
      selectAll,
      selectType: 'checkbox',
      ref: el => (this.selectTable = el),
      isSelected: key => value.includes(key),
      toggleSelection: (key, shift, row) => {
        let newValue
        if (value.includes(key)) {
          newValue = without(value, key)
        } else {
          newValue = [...value, key]
        }
        this.props.onChange(newValue)
      },
      toggleAll: () => {
        const newSelectAll = !selectAll
        let newValue = []
        if (newSelectAll) {
          // get filtered data, so that we only select all filtered data not all data.
          const wrappedInstance = this.selectTable.getWrappedInstance()
          const filteredData = wrappedInstance.getResolvedState().sortedData
          newValue = filteredData.map(v => v._original[keyField])
        }
        this.setState({ selectAll: newSelectAll })
        onChange(newValue)
      },
      // getTrProps  background change
    }
    return <SelectReactTable {...props as any} />
  }
}

export default SelectTable
