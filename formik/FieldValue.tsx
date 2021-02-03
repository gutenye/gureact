import * as React from 'react'
import { Field } from 'formik'

/**
 * <FieldValue name component ..rest>
 * props: { value, onChange(value), onBlur }, ...rest }
 */

const FieldValue = (props) => {
  if (props.component && typeof props.component !== 'string') {
    const { name, component: Component, innerRef, ...rest } = props
    return (
      <Field
        name={name}
        render={({ field, form }) => (
          <Component
            {...rest}
            value={field.value}
            onChange={(v) => form.setFieldValue(name, v)}
            onBlur={() => form.setFieldTouched(name, true)}
            name={name}
            ref={innerRef}
          />
        )}
      />
    )
  } else {
    return <Field {...props} />
  }
}

export default FieldValue
