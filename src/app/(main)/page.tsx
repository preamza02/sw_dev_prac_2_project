'use client';
import { useContext } from 'react';
import HotelsCard from './_components/hotelsCard';
import { HotelsContext } from '@/context/HotelContext';
import React from 'react';
export default function MainHomePage() {
  const { currentHotelList } = useContext(HotelsContext);
  return (
    <div className="space-y-5 pr-20">
      {currentHotelList.map((hotel) => (
        <HotelsCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
