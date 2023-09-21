export type PlanType = 'monthly' | 'yearly';

export interface Price extends Partial<Record<PlanType, number>> {}
interface Bonus extends Partial<Record<PlanType, string>> {}

export interface UserData {
  name: string;
  email: string;
  phone: string;
}

export interface Plan {
  name: string;
  title: string;
  icon: string;
  price: Price;
  bonus: Bonus;
}

export interface AddOn {
  name: string;
  title: string;
  description: string;
  price: Price;
}
