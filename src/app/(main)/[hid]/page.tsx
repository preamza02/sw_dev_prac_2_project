import HotelDetailCard from '../_components/hotelDetailCard';
import React from 'react';

export default async function HotelDetailPage({ params }: { params: { hid: string } }) {
  const { hid } = await params;
  return <HotelDetailCard isEditing={false} hotelID={hid} />;
}
