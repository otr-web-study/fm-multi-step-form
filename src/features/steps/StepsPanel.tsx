import { SingleStep } from './SingleStep';
import { useStepsPanel } from './useStepsPanel';

const StepsPanel = () => {
  const { steps, currentStep, handleClick } = useStepsPanel();

  const content = steps.map((step, i) => (
    <li key={step.id}>
      <SingleStep step={step} active={step.id === currentStep} index={i} onClick={handleClick} />
    </li>
  ));

  return (
    <section className="relative grid h-[98px] w-full place-items-center before:absolute before:left-0 before:top-0 before:h-[172px] before:w-full before:bg-panel-mobile before:bg-cover before:bg-[center_top] before:bg-no-repeat before:content-[''] md:row-span-2 md:min-h-[570px] md:min-w-[275px] md:place-items-start md:px-[34px] md:py-10 md:before:h-full md:before:w-full before:md:rounded-[10px] md:before:bg-panel-desktop">
      <ul className="z-10 flex gap-4 md:flex-col md:gap-8">{content}</ul>
    </section>
  );
};

export default StepsPanel;
