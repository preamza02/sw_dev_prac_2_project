'use client';
import React from 'react';
import HotelDetailCard from '@/app/(main)/_components/hotelDetailCard';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useEffect } from 'react';

export default function HotelDetailEditPage({ params }: { params: { hid: string } }) {
  const { currentUser } = useContext(AuthContext);
  console.log('currentUser', currentUser);

  useEffect(() => {
    if (currentUser !== null && currentUser.role !== 'admin') {
      console.log('not admin');
      console.log(currentUser.role);
    } else {
      console.log('admin');
    }
  }, [currentUser]);
  return <HotelDetailCard isEditing={true} hotelID={params.hid} />;
}
