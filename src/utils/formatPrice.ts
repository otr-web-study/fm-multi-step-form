import { PlanType } from '@/types/form';

export const formatPrice = (
  price: number | undefined,
  planType: PlanType,
  extra: boolean = false,
) => (price ? `${extra ? '+' : ''}$${price}/${planType === 'monthly' ? 'mo' : 'yr'}` : '');
