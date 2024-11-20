import React from 'react';
import HotelDetailCard from '@/app/(main)/_components/hotelDetailCard';
type tParams = Promise<{ hid: string }>;

export default async function HotelDetailEditPage({ params }: { params: tParams }) {
  // Show loading state if hotelID is not yet available
  const hid = (await params).hid;
  if (!hid) {
    return <div>Loading...</div>;
  }

  return <HotelDetailCard isEditing={true} hotelID={hid} />;
}
