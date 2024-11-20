import HotelDetailCard from '../_components/hotelDetailCard';
import React from 'react';

export default function HotelDetailPage({ params }: { params: { hid: string } }) {
  return <HotelDetailCard isEditing={false} hotelID={params.hid} />;
}
