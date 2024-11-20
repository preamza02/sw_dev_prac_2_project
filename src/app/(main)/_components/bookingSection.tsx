'use client';
import { useContext } from 'react';
import { HotelsContext } from '@/context/HotelContext';
import BookedHotelCard from '@/app/_components/bookedHotelCard';

export default function BookingSection() {
  const { currentBookingList } = useContext(HotelsContext);
  return (
    <div className="flex flex-col gap-4">
      {currentBookingList.map((booking) => (
        <div key={`${booking.hotel.id}:${booking.checkoutDate}:${booking.checkoutDate}`}>
          <BookedHotelCard booking={booking} />
        </div>
      ))}
    </div>
  );
}
