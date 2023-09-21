import { PlanType, Price } from '@/types/form';

export const formatPrice = (price: Price, planType: PlanType) =>
  `$${price[planType]}/${planType === 'monthly' ? 'mo' : 'yr'}`;
