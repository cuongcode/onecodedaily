import React from 'react';
import type { FC } from 'react';

interface BaseButtonProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
}

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="h-[48px] px-[16px] bg-black rounded-xm text-white"
    >
      {children || text}
    </button>
  );
};
