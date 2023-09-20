import { useAppSelector } from '@/store/appHooks';
import { selectConfirmed } from '@/features/steps/steps-selectors';
import { selectCurrentStep } from '@/features/steps/steps-selectors';
import { ConfirmedPanel } from './ConfirmedPanel';
import { PersonalInfo } from './PersonalInfo';
import { SelectPlan } from './SelectPlan';

export const FormDialog = () => {
  const confirmed = useAppSelector(selectConfirmed);
  const currentStep = useAppSelector(selectCurrentStep);

  const content = confirmed ? (
    <ConfirmedPanel />
  ) : (
    <>
      {currentStep === 'info' && <PersonalInfo />}
      {currentStep === 'select-plan' && <SelectPlan />}
    </>
  );

  return <section className="z-10 md:z-0">{content}</section>;
};
