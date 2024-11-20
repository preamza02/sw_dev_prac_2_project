'use client';
import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Booking } from '@/api/interfaces';
import deleteBooking from '@/api/booking/deleteBooking';
import updateBooking from '@/api/booking/updateBooking';
import { getCookie } from 'cookies-next';

type BookedHotelCardProps = {
  booking: Booking;
};

export default function BookedHotelCard({ booking }: BookedHotelCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const startDateString = new Date(booking.bookingDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const [startDateForInput, setStartDateForInput] = useState(
    new Date(booking.bookingDate).toISOString().split('T')[0],
  );
  const endDateString = new Date(booking.checkoutDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const [endDateForInput, setEndDateForInput] = useState(
    new Date(booking.checkoutDate).toISOString().split('T')[0],
  );

  const onClickEdit = () => {
    const token = getCookie('my_token');
    if (!token) {
      return;
    }
    console.log(booking._id);
    console.log(startDateForInput);
    console.log(endDateForInput);
    updateBooking(token as string, booking._id, startDateForInput, endDateForInput).then((data) => {
      console.log(data);
    });
  };

  const onClickDelete = () => {
    const token = getCookie('my_token');
    if (!token) {
      return;
    }
    deleteBooking(token as string, booking._id).then((data) => {
      console.log(data);
    });
  };

  return (
    <div
      className="w-[280px] rounded-lg border border-gray-300 p-4 shadow-md"
      onClick={() => setIsEditing(!isEditing)}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold">{booking.hotel.name}</h1>
        <p>{booking.hotel.address}</p>
      </div>
      {!isEditing && (
        <p>
          {startDateString} - {endDateString}
        </p>
      )}
      {isEditing && (
        // this part is not propergated click event to parent div when clicked
        <div onClick={(e) => e.stopPropagation()}>
          <div className="my-4 border-b"></div>
          <p>Check-in</p>
          <input
            type="date"
            className="mb-4 w-full"
            id="check-in"
            value={startDateForInput}
            onChange={(e) => setStartDateForInput(e.target.value)}
          />
          <p>Check-out</p>
          <input
            type="date"
            className="mb-4 w-full"
            id="check-out"
            value={endDateForInput}
            onChange={(e) => setEndDateForInput(e.target.value)}
          />
          <div className="mt-4 flex justify-between">
            <Button onClick={onClickEdit} variant="outlined" className="w-[120px]">
              Save
            </Button>
            <Button onClick={onClickDelete} variant="contained" className="w-[120px]">
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
