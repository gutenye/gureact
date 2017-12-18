import React from 'react'
import { withFormik, Form, Formik, Field as FormikField } from 'formik'

// Custom comonent supports: onChange(value), onBlur()
const Field = props => {
  const { component, render, children, name, value, innerRef, ...rest } = props
  if (component && typeof component !== 'string') {
    return (
      <FormikField
        name={name}
        render={bag => {
          const { field: { name, value }, form } = bag
          return React.createElement(component, {
            ...rest,
            ref: innerRef,
            name,
            value,
            onChange(v) {
              form.setFieldValue(name, v)
            },
            onBlur() {
              form.setFieldTouched(name, true)
            },
          })
        }}
      />
    )
  } else {
    return <FormikField {...props} />
  }
}

export { withFormik, Field, Form, Formik }
