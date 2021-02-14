import React, { useState } from 'react'
import { merge } from 'lodash'

import { useForm } from 'react-hook-form'

export interface StepFormProps {
  onSubmit: Function
  Steps: Array<any>

  StepSuccess?: any

  defaultValues?: Object

  /**
   * will loop if totalStep > Steps.length
   */
  totalStep?: number
}

/**
 * - Don't forget `<input defaultValue />`
 */
const StepForm: React.FC<StepFormProps> = ({
  onSubmit,
  Steps,
  StepSuccess,
  defaultValues = {},
  totalStep: origTotalStep,
}) => {
  const { register, handleSubmit, getValues, setValue } = useForm()
  const [step, setStep] = useState(0)
  const [isStepSuccess, setIsStepSuccess] = useState(false)
  const [totalValues, setTotalValues] = useState(defaultValues)

  const totalStep = origTotalStep || Steps.length
  const isFirstStep = step === 0
  const isLastStep = step === totalStep - 1

  let Step = isStepSuccess
    ? StepSuccess
    : Steps[Math.min(step, Steps.length - 1)]

  const next = () => {
    const nextStep = step + 1
    if (nextStep > totalStep - 1) {
      return
    }
    setTotalValues(merge({}, totalValues, getValues()))
    setStep(nextStep)
  }

  const prev = () => {
    const prevStep = step - 1
    if (prevStep < 0) {
      return
    }
    setTotalValues(merge({}, totalValues, getValues()))
    setStep(prevStep)
  }

  const newOnSubmit = async (stepValues) => {
    if (isLastStep) {
      const newValues = merge({}, totalValues, stepValues)
      setTotalValues(newValues)
      await onSubmit(newValues)
      if (StepSuccess) {
        setIsStepSuccess(true)
      }
    } else {
      next()
    }
  }

  const stepProps = {
    values: totalValues,
    register,
    step,
    isFirstStep,
    isLastStep,
    totalStep,
    next,
    prev,
    setValue,
  }

  return (
    <form onSubmit={handleSubmit(newOnSubmit)}>
      <Step key={step} {...stepProps} />
    </form>
  )
}

export default StepForm
