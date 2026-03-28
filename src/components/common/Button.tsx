import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition';

  const variantStyles =
    variant === 'primary'
      ? 'bg-black text-white hover:opacity-90'
      : 'border border-gray-300 bg-white text-black hover:bg-gray-50';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}