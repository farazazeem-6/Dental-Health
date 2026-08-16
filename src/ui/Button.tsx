import type { ButtonHTMLAttributes } from 'react';
import { button, type ButtonVariantProps } from '../../styled-system/recipes';
import { cx } from '../../styled-system/css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    className?: string;
  };

export function Button({ tone, size, className, children, ...rest }: ButtonProps) {
  return (
    <button className={cx(button({ tone, size }), className)} {...rest}>
      {children}
    </button>
  );
}
