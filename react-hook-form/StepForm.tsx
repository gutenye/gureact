import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

/**
 * <StepForm
 *   onSubmit,
 *   defaultValues,
 *   FirstStep,
 *   Steps,
 *   LastStep,
 * />
 */
const StepForm = ({
  onSubmit,
  FirstStep,
  Steps,
  LastStep,
  defaultValues = {},
}) => {
  const { register, handleSubmit, getValues } = useForm()
  const [step, setStep] = useState(0)
  const [totalValues, setTotalValues] = useState(defaultValues)

  const next = () => setStep(step + 1)
  const prev = () => {
    setTotalValues({ ...totalValues, ...getValues() })
    setStep(step - 1)
  }
  const newOnSubmit = stepValues => {
    const newValues = { ...totalValues, ...stepValues }
    setTotalValues(newValues)
    if (isLastStep) {
      onSubmit(newValues)
    } else {
      next()
    }
  }

  const totalStep = Steps.length
  const isFirstStep = step === 0
  const isLastStep = step === totalStep - 1
  const Step = Steps[step]
  const stepProps = {
    values: totalValues,
    register,
    step,
    isFirstStep,
    isLastStep,
    totalStep,
    next,
    prev,
  }

  return (
    <form onSubmit={handleSubmit(newOnSubmit)}>
      <Step {...stepProps} />
    </form>
  )
}

export default StepForm
