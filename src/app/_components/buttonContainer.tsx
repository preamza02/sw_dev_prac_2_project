'use client'

import React from "react";

export default function ButtonContainer({ children }: { children: React.ReactNode }) {
    return (
        <button className="py-[12px] px-[24px] w-full h-full">
            {children}
        </button>
    )
}