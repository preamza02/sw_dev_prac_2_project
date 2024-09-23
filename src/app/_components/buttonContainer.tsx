'use client';

import React from 'react';

export default function ButtonContainer({ children }: { children: React.ReactNode }) {
  return <button className="h-full w-full px-[24px] py-[12px]">{children}</button>;
}
