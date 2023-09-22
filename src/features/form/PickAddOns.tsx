import { FormContainer } from './FormContainer';
import { usePickAddOns } from './usePickAddOns';
import { AddOnCard } from './AddOnCard';

export const PickAddOns = () => {
  const title = 'Pick add-ons';
  const subtitle = 'Add-ons help enhance your gaming experience.';
  const { addOnsList, planType, toggleAddOn } = usePickAddOns();

  const content = addOnsList.map((addOn) => (
    <li key={addOn.name}>
      <AddOnCard planType={planType} {...addOn} onClick={() => toggleAddOn(addOn)} />
    </li>
  ));

  return (
    <FormContainer title={title} subtitle={subtitle} formValid={true}>
      <ul className="flex flex-col gap-3 md:gap-[14px]">{content}</ul>
    </FormContainer>
  );
};
