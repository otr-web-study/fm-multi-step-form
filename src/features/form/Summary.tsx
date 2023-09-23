import { FormContainer } from './FormContainer';
import { useSummary } from './useSummary';
import { formatPrice } from '@/utils/formatPrice';

export const Summary = () => {
  const title = 'Finishing up';
  const subtitle = 'Double-check everything looks OK before confirming.';
  const { plan, addOns, planType, totalSum, handleConfirm, handlePlanChange } = useSummary();

  const contentAddOns = addOns.map((addOn) => (
    <div className="flex justify-between md:text-sm" key={addOn.name}>
      <p className="text-cool-gray">{addOn.title}</p>
      <p>{formatPrice(addOn.price[planType], planType, true)}</p>
    </div>
  ));

  return (
    <FormContainer title={title} subtitle={subtitle} onSubmit={handleConfirm} formValid={true}>
      <div className="flex flex-col gap-3 rounded-md bg-pastel-blue/10 px-4 py-[18px] text-sm md:gap-4 md:px-[22px] md:text-base">
        <div className="flex items-center justify-between border-b border-b-light-gray pb-3 md:pb-[18px]">
          <div>
            <h3 className="font-medium">{`${plan?.title} (${
              planType === 'monthly' ? 'Monthly' : 'Yearly'
            })`}</h3>
            <span
              className="cursor-pointer text-cool-gray underline transition-colors duration-300 hover:text-purplish-blue"
              onClick={handlePlanChange}
            >
              Change
            </span>
          </div>
          <p className="font-medium">{formatPrice(plan?.price[planType], planType, true)}</p>
        </div>
        {contentAddOns}
      </div>
      <div className="mt-5 flex items-center justify-between px-4 md:mt-[26px] md:px-[22px]">
        <p className="text-sm">{`Total (per ${planType === 'monthly' ? 'month' : 'year'})`}</p>
        <p className="text-purplish-blue md:text-[21px]">{formatPrice(totalSum, planType, true)}</p>
      </div>
    </FormContainer>
  );
};
