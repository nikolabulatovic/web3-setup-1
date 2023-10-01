import { ButtonHTMLAttributes } from 'react';

import Button from '@/components/Button';

const ConnectWalletButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button className="mt-2 p-2 text-center" {...props}>
      Wallit
    </Button>
  );
};

export default ConnectWalletButton;
