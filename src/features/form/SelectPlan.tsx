import { FormContainer } from './FormContainer';
import { useSelectPlan } from './useSelectPlan';

export const SelectPlan = () => {
  const title = 'Select your plan';
  const subtitle = 'You have the option of monthly or yearly billing.';

  return (
    <FormContainer title={title} subtitle={subtitle} formValid={true}>
      <div></div>
    </FormContainer>
  );
};
