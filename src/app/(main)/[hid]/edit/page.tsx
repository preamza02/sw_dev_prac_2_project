'use client'
import HotelDetailCard from '@/app/(main)/_components/hotelDetailCard';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HotelDetailPage({ params }: { params: { hid: string } }) {
  const { currentUser, isLogin } = useContext(AuthContext);
  console.log('currentUser', currentUser);
  const router = useRouter();

  useEffect(() => {
    if(currentUser !== null && currentUser.role !== 'admin') {
      console.log('not admin');
      console.log(currentUser.role);
    }else{
      console.log('admin');
    }
  }, [currentUser]);
  return <HotelDetailCard isEditing={true} hotelID={params.hid} />;
}