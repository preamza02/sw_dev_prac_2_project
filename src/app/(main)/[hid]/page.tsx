import HotelDetailCard from '../_components/hotelDetailCard';
import React from 'react';

type tParams = Promise<{ hid: string[] }>;
export default async function HotelDetailPage({ params }: { params: tParams }) {
  const hid = (await params).hid;
  if (!hid) {
    return <div>Loading...</div>;
  }
  return <HotelDetailCard isEditing={false} hotelID={hid[0]} />;
}
