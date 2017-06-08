import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { Form, Modal, Button } from 'antd'
import INPUTS from '../Inputs/Inputs'

// FormModal.open({
//   items: [
//     {type: 'input', field: 'name', placeholder, rules: [{required: true}]}
//   ]
//   onSave(values)
@Form.create()
class FormModal extends React.Component {
  render() {
    const { close, items, form } = this.props
    return (
      <ModalStyled visible footer={null} onCancel={close}>
        <Form style={{ marginTop: 30 }} onSubmit={this.onSubmit}>
          {items.map(({ type, field, rules, ...rest }) => {
            const INPUT = INPUTS[type]
            return (
              <Form.Item key={field}>
                {form.getFieldDecorator(field, { rules: rules || [] })(
                  <INPUT autoComplete="off" {...rest} />
                )}
              </Form.Item>
            )
          })}
          <Form.Item className="actions">
            <Button onClick={close}>{t.cancel}</Button>
            <Button type="primary" htmlType="submit">{t.save}</Button>
          </Form.Item>
        </Form>
      </ModalStyled>
    )
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((errors, values) => {
      if (errors) return
      // trim whitespace
      this.props.items.forEach(v => {
        values[v.field] = INPUTS[v.type].trim(values[v.field])
      })
      this.props.onSave(values)
      this.props.close()
    })
  }
}

FormModal.open = function(options) {
  let div = document.createElement('div')
  document.body.appendChild(div)

  function close() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div)
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }

  ReactDOM.render(<FormModal {...options} close={close} />, div)
}

const ModalStyled = styled(Modal)`
  .actions {
    display: flex;
    justify-content: flex-end;
  }
`

const TRANSLATIONS = {
  en: {
    save: 'Save',
    cancel: 'Cancel',
  },
  zh: {
    save: '保存',
    cancel: '取消',
  },
}
const t = TRANSLATIONS[window.locale]

export default FormModal
