import { ButtonHTMLAttributes } from 'react';

const Button = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={className} {...props}>
      Some text
    </button>
  );
};

export default Button;
