'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { Hotel, Booking } from '@/api/interfaces';
import getHotels from '@/api/hotel/getHotels.api';
import getBooking from '@/api/booking/getBooking';
import { getCookie } from 'cookies-next';
import searchHandle from '@/utils/searchHandle';

export interface THotelContext {
  searchQuery: string;
  currentBookingList: Booking[];
  allHotelList: Hotel[];
  currentHotelList: Hotel[];
  checkInDate: Date;
  checkOutDate: Date;
  setSearchQuery: (query: string) => void;
  setCurrentBookingList: (currentEntity: Booking[]) => void;
  setAllHotelList: (currentEntity: Hotel[]) => void;
  setCurrentHotelList: (currentEntity: Hotel[]) => void;
  setCheckInDate: (date: Date) => void;
  setCheckOutDate: (date: Date) => void;
}

export const HotelsContext = createContext<THotelContext>({
  searchQuery: '',
  currentBookingList: [],
  allHotelList: [],
  currentHotelList: [],
  checkInDate: new Date(),
  checkOutDate: new Date(),
  setSearchQuery: () => {},
  setCurrentBookingList: () => {},
  setAllHotelList: () => {},
  setCurrentHotelList: () => {},
  setCheckInDate: () => {},
  setCheckOutDate: () => {},
});

interface Props {
  children: ReactNode;
}

export const HotelsProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentBookingList, setCurrentBookingList] = useState<Booking[]>([]);
  const [allHotelList, setAllHotelList] = useState<Hotel[]>([]);
  const [currentHotelList, setCurrentHotelList] = useState<Hotel[]>([]);
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(new Date());

  useEffect(() => {
    getHotels().then((data) => {
      if ('message' in data) {
        return;
      }
      setAllHotelList(data.data);
    });
    const token = getCookie('my_token');
    if (token) {
      getBooking(token as string).then((data) => {
        if ('message' in data) {
          return;
        }
        setCurrentBookingList(data.data);
      });
    }
  }, []);

  useEffect(() => {
    searchHandle(searchQuery, allHotelList, setCurrentHotelList);
  }, [allHotelList]);

  useEffect(() => {
    for (let i = 0; i < currentBookingList.length; i++) {
      const booking = currentBookingList[i];
      const bookingDate = new Date(booking.bookingDate);
      const checkoutDate = new Date(booking.checkoutDate);
      for (let j = 0; j < currentHotelList.length; j++) {
        const hotel = currentHotelList[j];
        if (
          bookingDate === checkOutDate ||
          checkoutDate === checkInDate ||
          booking.hotel.id === hotel.id
        ) {
          currentHotelList[j].isBooked = false;
        } else {
          currentHotelList[j].isBooked = true;
        }
      }
    }
    setCurrentHotelList([...currentHotelList]);
  }, [checkInDate, checkOutDate, currentBookingList]);

  return (
    <HotelsContext.Provider
      value={{
        searchQuery,
        currentBookingList,
        allHotelList,
        currentHotelList,
        checkInDate,
        checkOutDate,
        setSearchQuery,
        setCurrentBookingList,
        setAllHotelList,
        setCurrentHotelList,
        setCheckInDate,
        setCheckOutDate,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
