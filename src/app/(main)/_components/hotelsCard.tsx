'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Hotel } from '@/api/interfaces';
import { HotelsContext } from '@/context/HotelContext';
import bookingOnclick from '../_utils/bookingOnclick';
import { useRouter } from 'next/navigation';
import React from 'react';

interface HotelsCardProps {
  hotel: Hotel; // Define the prop to accept the hotel data
}

export default function HotelsCard({ hotel }: HotelsCardProps) {
  const { currentUser } = useContext(AuthContext);
  const { checkInDate, checkOutDate } = useContext(HotelsContext);
  const imageUrl = hotel.picture ? hotel.picture : '/img/test_hotels.png';
  const router = useRouter();
  return (
    <div className="flex h-[150px] w-full flex-col overflow-hidden rounded-2xl border-2 shadow">
      <Link
        href={`/${hotel.id}`}
        className="flex h-full w-full flex-row items-center justify-center"
      >
        <div className="relative h-full w-1/4 overflow-hidden">
          {/* Dynamically use the hotel's picture if available */}
          <Image
            src={
              imageUrl.startsWith('http') || imageUrl.startsWith('/')
                ? imageUrl
                : '/img/test_hotels.png'
            }
            alt="hotel"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add appropriate sizes
            priority={true}
          />
        </div>
        <div className="flex h-full w-3/4 flex-row px-10">
          <div className="m-auto flex w-full flex-col">
            <h1 className="bold text-2xl">{hotel.name}</h1>
            <p className="text-blue-600">
              Address : {hotel.address} {hotel.district} ,{hotel.province} {hotel.postalcode}
            </p>
            <p className="text-blue-600">Tel : {hotel.tel}</p>
          </div>
          <div className="m-auto w-fit">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // if (checkOutDate <= checkInDate) {
                //   alert('Check out date must be later than check in date');
                //   return;
                // }
                // const token = getCookie('my_token');
                // if (!token) {
                //   return;
                // }
                // createBooking(token as string, hotel.id as string, {
                //   bookingDate: checkInDate.toISOString().split('T')[0],
                //   checkoutDate: checkOutDate.toISOString().split('T')[0],
                //   createdAt: new Date().toISOString().split('T')[0],
                // });
                bookingOnclick(checkInDate, checkOutDate, hotel.id as string);
              }}
              className="rounded bg-green-500 px-6 py-2 text-white"
            >
              Book
            </button>
            {currentUser?.role === 'admin' && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/${hotel.id as string}/edit`);
                }}
                className="flex h-full cursor-pointer items-center justify-end"
              >
                <p className="underline">Edit</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
