import React from 'react'
import { Form as FinalForm, FormProps } from 'react-final-form'

/**
 * Issues
 *  - no initalValues: rerender cause the values to reset. Solution: next button form.change(key, value)
 *
 * <FormSteps
 *   page: 0, onPageChange, onSubmit
 *   totalPage      // will loop if totalPage > children count
 *   Form: styled('form'),
 *   ButtonsPosition: 'after'
 *   Buttons: ({ isFirstPage, isLastPage, page, totalPage, previous, next, submitting, ...form }) => (
 *     <div>
 *       {!isFirstPage && <button type="button" onClick={previous}>Previous</button>}
 *       {!isLastPage && <button type="button" onClick={next}>Next</button>}
 *       {isLastPage && <button type="submit" disabled={submitting}>Submit</button>}
 *       // can not use <button type={isLastPage ? 'submit' : 'button'} .. /> cause the page before the last one call next and submit at the same time.
 *     </div>
 *   )
 * >
 *   <FormSteps.Page validate render component children />  // Page-level validation
 *     props: { ...ButtonsProps, values, .. }  // from react-final-form
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
  totalPage?: number
}

class FormSteps extends React.Component<Props> {
  static Page: any

  static defaultProps = {
    ButtonsPosition: 'after',
  }

  state = {
    // fix initalValues, re-render will reset initialValues if you use this.props.initialValues directly
    initialValues: this.props.initialValues,
  }

  render() {
    const { Form, page, ButtonsPosition, ...rest } = this.props
    const { initialValues } = this.state
    const activePage = this.activePage()
    const totalPage = this.totalPage()
    const isLastPage = page === totalPage - 1
    const isFirstPage = page === 0
    return (
      <FinalForm
        {...rest}
        initialValues={initialValues}
        validate={this.validate}
        onSubmit={this.props.onSubmit}
      >
        {({ handleSubmit, ...renderRest }) => {
          const buttons = this.props.Buttons({
            isFirstPage,
            isLastPage,
            page,
            totalPage,
            previous: this.previous,
            next: this.next,
            ...renderRest,
          })

          return (
            <Form onSubmit={handleSubmit}>
              {ButtonsPosition === 'before' && buttons}
              {renderComponent({
                isFirstPage,
                isLastPage,
                page,
                totalPage,
                previous: this.previous,
                next: this.next,
                ...activePage.props,
                ...renderRest,
              })}
              {ButtonsPosition === 'after' && buttons}
            </Form>
          )
        }}
      </FinalForm>
    )
  }

  totalPage = () => {
    const { totalPage, children } = this.props
    return totalPage || React.Children.count(children)
  }

  activePage = () => {
    const { page, children } = this.props
    const childrenIndex = Math.min(page, React.Children.count(children) - 1)
    return React.Children.toArray(children)[childrenIndex] as any
  }

  next = () => {
    const { page } = this.props
    const newPage = Math.min(page + 1, this.totalPage() - 1)
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

  validate = (values) => {
    const activePage = this.activePage()
    return activePage.props.validate ? activePage.props.validate(values) : {}
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
