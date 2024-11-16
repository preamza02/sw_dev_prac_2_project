'use client';
import { useContext } from 'react';
import HotelsCard from './_components/hotelsCard';
import { HotelsContext } from '@/context/HotelContext';
export default function MainHomePage() {
  const { currentHotelList } = useContext(HotelsContext);
  return (
    <div className="scrollbar-custom h-[740px] max-h-[740px] space-y-5 overflow-y-scroll pr-20">
      {currentHotelList.map((hotel) => (
        <HotelsCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
