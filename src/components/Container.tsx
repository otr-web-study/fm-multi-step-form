import { type FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[min-content_1fr_min-content] md:min-h-fit md:grid-cols-2">
      {children}
    </div>
  );
};
