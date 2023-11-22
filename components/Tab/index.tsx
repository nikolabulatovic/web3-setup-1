import { ReactNode } from 'react';

export interface TabProps {
  /**
   * The content of the tab
   */
  children: ReactNode;
  /**
   * Tab name / label
   */
  label: string;
}

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;
