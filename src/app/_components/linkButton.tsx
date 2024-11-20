import Link from 'next/link';
import ButtonContainer from './buttonContainer';
import React from 'react';
export default function LinkButton({
  title,
  link,
  bgColor = '#4190ED',
  borderColor = '#4190ED',
  textColor = '#FFFFFF',
}: {
  title: string;
  link: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}) {
  return (
    <Link
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
      href={link}
      className={`flex h-fit w-full rounded-lg border`}
    >
      <ButtonContainer>
        <p style={{ color: textColor }} className={`font-bold`}>
          {title}
        </p>
      </ButtonContainer>
    </Link>
  );
}
