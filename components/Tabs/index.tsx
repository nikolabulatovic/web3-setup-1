import { ReactElement, useState } from 'react';

import { TabProps } from '@/components/Tab';

interface TabsProps {
  /**
   * Children of the Tabs component, which should be an array of Tab components
   */
  children: ReactElement<TabProps>[];
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>('');

  const handleTabClick = (nextActiveTab: string) => {
    setActiveTab(nextActiveTab);
  };

  return (
    <>
      <div className="bg-[yellow]">
        {children.map(({ props: { label } }) => (
          <button
            className="bg-[purple]"
            onClick={() => {
              handleTabClick(label);
            }}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      {children.map(
        ({ props: { children: tabChildren, label } }) => label === activeTab && tabChildren,
      )}
    </>
  );
};

export default Tabs;
