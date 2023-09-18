import { type FC } from 'react';

interface FormContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  onSubmit: () => void;
}

export const FormContainer: FC<FormContainerProps> = ({ children, title, subtitle, onSubmit }) => {
  return (
    <form className="" onSubmit={onSubmit}>
      <div className="mx-4 rounded-lg bg-white px-6 py-[30px] text-marine-blue">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="mb-5 mt-[10px] text-cool-gray">{subtitle}</h2>
        {children}
      </div>
    </form>
  );
};
