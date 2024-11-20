import React from 'react';
export default function ActionButton({
  title,
  onClick,
  bgColor = '#4190ED',
  borderColor = '#4190ED',
  textColor = '#FFFFFF',
}: {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
      className="flex h-full w-full justify-center rounded-lg border px-[24px] py-[12px]"
    >
      <p style={{ color: textColor }} className={`font-bold`}>
        {title}
      </p>
    </button>
  );
}
