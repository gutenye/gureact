import React from 'react'
import { Form, FormProps } from 'react-final-form'

/**
 *
 * <FormSteps
 *   page, onPageChange
 *   onSubmit
 *   Buttons: ({ isFirstPage, isLastPage, previous, submitting, ...rest }) => (
 *     <div>
 *       {!isFirstPage && <button type="button" onClick={previous}>Previous</button>}
 *       {!isLastPage && <button type="submit">Next »</button>}
 *       {isLastPage && <button type="submit" disabled={submitting}>Submit</button>}
 *     </div>
 *   )
 * >
 *   <FormSteps.Page validate render component children />  // Page-level validation
 *   ...
 * </FormSteps>
 *
 */

interface Props extends FormProps {
  page: number
  onPageChange: any
  Buttons: any
  onSubmit: any
  children: any
}

class FormSteps extends React.Component<Props> {
  static Page: any

  render() {
    const { page, onPageChange, children, ...rest } = this.props
    const activePage = React.Children.toArray(children)[page] as any
    const isLastPage = page === React.Children.count(children) - 1
    const isFirstPage = page === 0
    return (
      <Form {...rest} validate={this.validate} onSubmit={this.onSubmit}>
        {({ handleSubmit, ...renderRest }) => (
          <form onSubmit={handleSubmit}>
            {renderComponent({ ...activePage.props, ...renderRest })}
            {this.props.Buttons({
              isFirstPage,
              isLastPage,
              previous: this.previous,
              ...rest,
            })}
          </form>
        )}
      </Form>
    )
  }

  next = () => {
    const { page, children } = this.props
    const newPage = Math.min(page + 1, children.length - 1)
    this.props.onPageChange(newPage)
  }

  previous = () => {
    const { page } = this.props
    const newPage = Math.max(page - 1, 0)
    this.props.onPageChange(newPage)
  }

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const { page, children } = this.props
    const activePage = React.Children.toArray(children)[page] as any
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  onSubmit = values => {
    const { page, children } = this.props
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return this.props.onSubmit(values)
    } else {
      this.next()
    }
  }
}

FormSteps.Page = () => {}

function renderComponent({ component, render, children, ...rest }) {
  if (component) {
    return React.createElement(component, { render, children, ...rest })
  } else if (render) {
    return render({ children, ...rest })
  } else {
    return children
  }
}

export default FormSteps
