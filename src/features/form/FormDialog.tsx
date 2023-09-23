import { useAppSelector } from '@/store/appHooks';
import { selectConfirmed } from '@/features/steps/steps-selectors';
import { selectCurrentStep } from '@/features/steps/steps-selectors';
import { ConfirmedPanel } from './ConfirmedPanel';
import { PersonalInfo } from './PersonalInfo';
import { SelectPlan } from './SelectPlan';
import { PickAddOns } from './PickAddOns';
import { Summary } from './Summary';

export const FormDialog = () => {
  const confirmed = useAppSelector(selectConfirmed);
  const currentStep = useAppSelector(selectCurrentStep);

  const content = confirmed ? (
    <ConfirmedPanel />
  ) : (
    <>
      {currentStep === 'info' && <PersonalInfo />}
      {currentStep === 'select-plan' && <SelectPlan />}
      {currentStep === 'select-addons' && <PickAddOns />}
      {currentStep === 'summary' && <Summary />}
    </>
  );

  return <section className="z-10 md:z-0">{content}</section>;
};
