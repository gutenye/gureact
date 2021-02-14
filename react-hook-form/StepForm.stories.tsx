import React from "react";
import StepForm from "./StepForm";

export default {
  title: "React_Hook_Form/StepForm",
  component: StepForm,
};

const onSubmit = (values) => console.log(JSON.stringify(values, null, 2));

const Step1 = ({ next }) => <button onClick={next}>step1</button>;
const SuccessStep = () => <div>Success</div>;

const StepLoop = ({
  step,
  isFirstStep,
  isLastStep,
  prev,
  next,
  values,
  register,
}) => {
  const key = `step${step}`;
  return (
    <div key={key}>
      <input
        name={key}
        placeholder={key}
        defaultValue={values[key]}
        ref={register}
      />
      <button type="button" onClick={prev} disabled={isFirstStep}>
        Prev
      </button>
      <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
    </div>
  );
};

export const Basic = () => (
  <StepForm
    onSubmit={onSubmit}
    Steps={[Step1, StepLoop]}
    totalStep={4}
    SuccessStep={SuccessStep}
  />
);
