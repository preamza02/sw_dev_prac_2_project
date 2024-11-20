'use client';

import { useState } from 'react';
import { Button } from '@mui/material';



export default function BookedHotelCard() {
    const [isEditing, setIsEditing] = useState(false);
    const startDateString = '01 May 2021';
    const endDateString = '03 May 2021';

    const onClickEdit = () => {
        console.log('Edit');
    }

    const onClickDelete = () => {
        console.log('Delete');
    }


    return (
        <div className='border p-4 w-[280px] rounded-lg shadow-md border-gray-300' onClick={() => setIsEditing(!isEditing)}>
            <div className='flex justify-between items-center'>
                <h1 className='text-[24px] font-bold'>Hotel name</h1>
                <p>address</p>
            </div>
            {!isEditing && (
                <p>{startDateString} - {endDateString}</p>
            )}
            {isEditing && (
                // this part is not propergated click event to parent div when clicked
                <div onClick={(e) => e.stopPropagation()}>
                    <div className='border-b my-4'></div>
                    <p>Check-in</p>
                    <input type='date' className='w-full mb-4' id='check-in' />
                    <p>Check-out</p>
                    <input type='date' className='w-full mb-4' id='check-out' />
                    <div className='flex justify-between mt-4'>
                        <Button onClick={onClickEdit} variant='outlined' className='w-[120px]'>
                            Save
                        </Button>
                        <Button onClick={onClickDelete} variant='contained' className='w-[120px]'>
                            Delete
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}