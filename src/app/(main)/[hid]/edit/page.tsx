import HotelDetailCard from '@/app/(main)/_components/hotelDetailCard';

export default function HotelDetailPage({ params }: { params: { hid: string } }) {
  return <HotelDetailCard isEditing={true} hotelID={params.hid} />;
}
