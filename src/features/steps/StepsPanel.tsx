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
    <section className="before:bg-panel-mobile md:before:bg-panel-desktop relative grid h-[98px] w-full place-items-center before:absolute before:left-0 before:top-0 before:h-[172px] before:w-full before:bg-cover before:bg-[center_top] before:bg-no-repeat before:content-['']">
      <ul className="z-10 flex gap-4">{content}</ul>
    </section>
  );
};

export default StepsPanel;
