import { type FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="md:shadow-base-sh grid min-h-screen grid-cols-1 grid-rows-[min-content_1fr] bg-transparent md:mx-4 md:mt-[104px] md:min-h-fit md:grid-cols-[min-content_1fr] md:grid-rows-1 md:rounded-xl md:bg-white md:px-4 md:py-4">
      {children}
    </div>
  );
};
