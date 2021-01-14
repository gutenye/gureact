import React from 'react'
import selectHoc from 'react-table/lib/hoc/selectTable'
import ReactTable, { TableProps } from 'react-table'
import { remove } from 'lodash'

/**
 * <Table
 *   value         // value: [item, ..]
 *   onChange, keyField, columns, data ..
 *
 * To implement:
 *   - selectAll - a property that indicates if the selectAll is set (true|false)
 *   - selectType - either checkbox|radio to indicate what type of selection is required
 *   - isSelected - returns true if the key passed is selected otherwise it should return false
 *   - toggleAll - called when the user clicks the selectAll checkbox/radio
 *   - toggleSelection - called when the use clicks a specific checkbox/radio in a row
 *
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
    const { value, data, onChange, keyField, ...rest } = this.props
    pd('value', value)
    const { selectAll } = this.state
    const props = {
      ...rest,
      data,
      keyField,
      selectAll,
      selectType: 'checkbox',
      ref: el => (this.selectTable = el),
      isSelected: this.isSelected,
      toggleSelection: this.toggleSelection,
      toggleAll: this.toggleAll,
      // getTrProps  background change
    }
    return <SelectReactTable {...props as any} />
  }

  isSelected = key => {
    const { value, keyField } = this.props
    return Boolean(value.find(v => v[keyField] === key))
  }

  toggleSelection = (key, shift, row) => {
    const { value, keyField } = this.props
    let newValue
    if (this.isSelected(key)) {
      newValue = value.filter(v => v[keyField] !== key)
    } else {
      newValue = [...value, row]
    }
    this.props.onChange(newValue)
  }

  toggleAll = () => {
    const { selectAll } = this.state
    const newSelectAll = !selectAll
    let newValue: any[] = []
    if (newSelectAll) {
      // get filtered data, so that we only select all filtered data not all data.
      const wrappedInstance = this.selectTable.getWrappedInstance()
      const filteredData = wrappedInstance.getResolvedState().sortedData
      newValue = filteredData.map(v => v._original)
    }
    this.setState({ selectAll: newSelectAll })
    this.props.onChange(newValue)
  }
}

// value: [id, ..]
/*
  valueIsSelected(value, key, keyField) {
    return value.includes(key)
  }
  valueToggleSelection(value, key, keyField, data) {
    let newValue
    if (value.includes(key)) {
      newValue = without(value, key)
    } else {
      newValue = [...value, key]
    }
    return newValue
  }
  valueToggleAll(filteredData, keyField) {
    return filteredData.map(v => v._original[keyField])
  }
  */

export default SelectTable
