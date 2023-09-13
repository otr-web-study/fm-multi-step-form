export type StepId = 'info' | 'select-plan' | 'select-addons' | 'summary';

export interface Step {
  id: StepId;
  title: string;
  available: boolean;
}
