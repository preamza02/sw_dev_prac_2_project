import React from 'react';
import HotelDetailCard from '@/app/(main)/_components/hotelDetailCard';

export default async function HotelDetailEditPage({ params }: { params: { hid: string } }) {
  // Show loading state if hotelID is not yet available
  const { hid } = await params;
  if (!hid) {
    return <div>Loading...</div>;
  }

  return <HotelDetailCard isEditing={true} hotelID={hid} />;
}
