import { AppInput } from '@/components/AppInput';
import { FormContainer } from './FormContainer';
import { usePersonalInfo } from './usePersonalInfo';

export const PersonalInfo = () => {
  const title = 'Personal info';
  const subtitle = 'Please provide your name, email address, and phone number.';

  const { errors, register, handleSubmit } = usePersonalInfo();

  return (
    <FormContainer title={title} subtitle={subtitle} onSubmit={handleSubmit}>
      <div>
        <AppInput
          {...register('name', { required: 'This field is required.' })}
          label="Name"
          placeholder="e.g. Stephen King"
          validationState={errors?.name ? 'invalid' : 'valid'}
          errorMessage={(errors?.name?.message as string) ?? ''}
        />
      </div>
    </FormContainer>
  );
};
