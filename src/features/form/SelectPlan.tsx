import { FormContainer } from './FormContainer';
import { useSelectPlan } from './useSelectPlan';
import { MPlanCard } from './PlanCard';
import { AppSwitch } from '@/components/AppSwitch';
import { itemVariants } from '@/utils/animateVatianst';

export const SelectPlan = () => {
  const title = 'Select your plan';
  const subtitle = 'You have the option of monthly or yearly billing.';
  const { planList, currentPlan, planType, handleSelectPlan, togglePlanType } = useSelectPlan();

  const content = planList.map((plan, i) => (
    <li key={plan.name}>
      <MPlanCard
        custom={i}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        planType={planType}
        onClick={() => handleSelectPlan(plan)}
        {...plan}
        isActive={plan.name === currentPlan?.name}
      />
    </li>
  ));

  return (
    <FormContainer title={title} subtitle={subtitle} formValid={true}>
      <ul className="mb-7 flex flex-col gap-[9px] md:mb-8 md:flex-row md:gap-[20px]">{content}</ul>
      <AppSwitch
        titleLeft="Monthly"
        titleRight="Yearly"
        value={planType === 'yearly'}
        onChange={togglePlanType}
      />
    </FormContainer>
  );
};
