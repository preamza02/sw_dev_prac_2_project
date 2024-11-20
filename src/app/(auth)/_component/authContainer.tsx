import React from 'react';
export default function AuthContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-fit w-[500px] space-y-4 rounded-xl border border-black border-opacity-20 bg-white px-4 pb-10 pt-6 drop-shadow-md">
      {children}
    </div>
  );
}
