import * as React from 'react'
import { Field } from 'react-final-form'

/**
 *
 * <FieldValue component={CommonComponent} />
 * - Support CommonComponent: <Component value onChange />
 */

const FieldValue = props => {
  if (props.component && typeof props.component !== 'string') {
    const { component: Component, ...rest } = props
    return (
      <Field
        {...rest}
        render={({ input, meta, ...restRender }) => (
          <Component
            {...restRender}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            onBlur={input.onBlur}
          />
        )}
      />
    )
  } else {
    return <Field {...props} />
  }
}

export default FieldValue
