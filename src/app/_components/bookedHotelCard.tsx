'use client';
import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function BookedHotelCard() {
  const [isEditing, setIsEditing] = useState(false);
  const startDateString = '01 May 2021';
  const endDateString = '03 May 2021';

  const onClickEdit = () => {
    console.log('Edit');
  };

  const onClickDelete = () => {
    console.log('Delete');
  };

  return (
    <div
      className="w-[280px] rounded-lg border border-gray-300 p-4 shadow-md"
      onClick={() => setIsEditing(!isEditing)}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold">Hotel name</h1>
        <p>address</p>
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
          <input type="date" className="mb-4 w-full" id="check-in" />
          <p>Check-out</p>
          <input type="date" className="mb-4 w-full" id="check-out" />
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
