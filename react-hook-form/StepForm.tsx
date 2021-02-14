import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export interface StepFormProps {
  onSubmit: Function
  Steps: Array<any>
  SuccessStep?: any

  /**
   * will loop if totalStep > Steps.length
   */
  totalStep?: number
}

/**
 * <StepForm
 *   onSubmit,
 *   defaultValues,
 *   FirstStep,
 *   Steps,
 *   LastStep,
 * />
 */
const StepForm: React.FC<StepFormProps> = ({
  onSubmit,
  Steps,
  SuccessStep,
  defaultValues = {},
  totalStep: origTotalStep,
}) => {
  const { register, handleSubmit, getValues, setValue } = useForm()
  const [step, setStep] = useState(0)
  const [isSuccessStep, setIsSuccessStep] = useState(false)
  const [totalValues, setTotalValues] = useState(defaultValues)

  const totalStep = origTotalStep || Steps.length
  const isFirstStep = step === 0
  const isLastStep = step === totalStep - 1

  let Step = isSuccessStep
    ? SuccessStep
    : Steps[Math.min(step, Steps.length - 1)]

  const next = () => {
    const nextStep = step + 1
    if (nextStep > totalStep - 1) {
      return
    }
    setStep(nextStep)
  }

  const prev = () => {
    const prevStep = step - 1
    if (prevStep < 0) {
      return
    }
    setTotalValues({ ...totalValues, ...getValues() })
    setStep(prevStep)
  }

  const newOnSubmit = async (stepValues) => {
    const newValues = { ...totalValues, ...stepValues }
    setTotalValues(newValues)
    if (isLastStep) {
      await onSubmit(newValues)
      if (SuccessStep) {
        setIsSuccessStep(true)
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
