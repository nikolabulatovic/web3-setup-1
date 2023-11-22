import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Any additional CSS classes we want the button to have
   */
  className?: string;
}

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={`text-skin-button rounded-[1.2rem] bg-skin-button-accent px-10 py-2 hover:bg-skin-button-accent-hover ${
        className ?? ''
      }`}
      {...props}
    >
      Some text
    </button>
  );
};

export default Button;
