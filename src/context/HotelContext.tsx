'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { Hotel } from '@/api/interfaces';
import getHotels from '@/api/hotel/getHospital.api';

interface THotelContext {
  currentBookingList: Hotel[];
  currentHospitalList: Hotel[];
  checkInDate: Date;
  checkOutDate: Date;
  setCurrentBookingList: (currentEntity: Hotel[]) => void;
  setCurrentHospitalList: (currentEntity: Hotel[]) => void;
  setCheckInDate: (date: Date) => void;
  setCheckOutDate: (date: Date) => void;
}

export const HotelsContext = createContext<THotelContext>({
  currentBookingList: [],
  currentHospitalList: [],
  checkInDate: new Date(),
  checkOutDate: new Date(),
  setCurrentBookingList: () => {},
  setCurrentHospitalList: () => {},
  setCheckInDate: () => {},
  setCheckOutDate: () => {},
});

interface Props {
  children: ReactNode;
}

export const HotelsProvider = ({ children }: Props) => {
  const [currentBookingList, setCurrentBookingList] = useState<Hotel[]>([]);
  const [currentHospitalList, setCurrentHospitalList] = useState<Hotel[]>([]);
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(new Date());

  useEffect(() => {
    getHotels().then((data) => {
      if ('message' in data) {
        return;
      }
      setCurrentHospitalList(data.data);
    });
  }, []);

  return (
    <HotelsContext.Provider
      value={{
        currentBookingList,
        currentHospitalList,
        checkInDate,
        checkOutDate,
        setCurrentBookingList,
        setCurrentHospitalList,
        setCheckInDate,
        setCheckOutDate,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
