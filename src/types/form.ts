export type PlanType = 'monthly' | 'yearly';

interface Price extends Partial<Record<PlanType, number>> {}
interface Bonus extends Partial<Record<PlanType, string>> {}

export interface UserData {
  name: string;
  email: string;
  phone: string;
}

export interface Plan {
  name: string;
  title: string;
  price: Price;
  bonus: Bonus;
}
