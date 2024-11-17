'use client';
import { useContext } from 'react';
import { HotelsContext } from '@/context/HotelContext';

export default function BookingSection() {
  const { currentBookingList } = useContext(HotelsContext);
  return (
    <div>
      {currentBookingList.map((booking) => (
        <div key={`${booking.hotel.id}:${booking.checkoutDate}:${booking.checkoutDate}`}>
          {booking.hotel.name}
        </div>
      ))}
    </div>
  );
}
