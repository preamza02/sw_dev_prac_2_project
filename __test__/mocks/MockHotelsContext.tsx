import { HotelsContext } from '@/context/HotelContext';
import { Hotel } from '@/api/interfaces';
import React from 'react';

const mockHotels: Hotel[] = [];

export const mockContext = {
  searchQuery: '',
  currentBookingList: [],
  allHotelList: mockHotels,
  currentHotelList: [],
  checkInDate: new Date(),
  checkOutDate: new Date(),
  setSearchQuery: jest.fn(),
  setCurrentBookingList: jest.fn(),
  setAllHotelList: jest.fn(),
  setCurrentHotelList: jest.fn(),
  setCheckInDate: jest.fn(),
  setCheckOutDate: jest.fn(),
};

export function MockHotelsProvider(children: React.ReactNode) {
  return <HotelsContext.Provider value={mockContext}>{children}</HotelsContext.Provider>;
}
