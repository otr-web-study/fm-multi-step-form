import { AppInput } from '@/components/AppInput';
import { FormContainer } from './FormContainer';
import { usePersonalInfo } from './usePersonalInfo';

export const PersonalInfo = () => {
  const title = 'Personal info';
  const subtitle = 'Please provide your name, email address, and phone number.';

  const { errors, register, handleSubmit } = usePersonalInfo();

  return (
    <FormContainer title={title} subtitle={subtitle} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[15px] md:gap-[26px]">
        <AppInput
          {...register('name', { required: 'This field is required.' })}
          label="Name"
          placeholder="e.g. Stephen King"
          validationState={errors?.name ? 'invalid' : 'valid'}
          errorMessage={(errors?.name?.message as string) ?? ''}
        />
        <AppInput
          {...register('email', {
            required: 'This field is required.',
            pattern: { value: /^\S+@\S+$/i, message: 'Please enter valid email.' },
          })}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          validationState={errors?.email ? 'invalid' : 'valid'}
          errorMessage={(errors?.email?.message as string) ?? ''}
        />
        <AppInput
          {...register('phone', {
            required: 'This field is required.',
            pattern: {
              value: /^\+[1-9]{1}[0-9]{0,2} [2-9]{1}[0-9]{2} [2-9]{1}[0-9]{2} [0-9]{3,4}$/,
              message: 'Please enter valid phone number.',
            },
          })}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          validationState={errors?.phone ? 'invalid' : 'valid'}
          errorMessage={(errors?.phone?.message as string) ?? ''}
        />
      </div>
    </FormContainer>
  );
};
