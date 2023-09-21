import { FormContainer } from './FormContainer';
import { usePickAddOns } from './usePickAddOns';

export const PickAddOns = () => {
  const title = 'Pick add-ons';
  const subtitle = 'Add-ons help enhance your gaming experience.';
  const {} = usePickAddOns();

  return (
    <FormContainer title={title} subtitle={subtitle} formValid={true}>
      <div></div>
    </FormContainer>
  );
};
