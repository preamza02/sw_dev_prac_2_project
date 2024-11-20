'use client';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { HotelsContext } from '@/context/HotelContext';
import { useRouter } from 'next/navigation';
import { Hotel } from '@/api/interfaces';
import searchHandle from '@/utils/searchHandle';
import React from 'react';

export default function SearchBar() {
  const { currentUser } = useContext(AuthContext);
  const {
    searchQuery,
    setSearchQuery,
    setCurrentHotelList,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    allHotelList,
  } = useContext(HotelsContext);
  const router = useRouter();

  return (
    <div className="flex h-[70px] items-center justify-center space-x-4 bg-[#20274D] p-10">
      <div className="flex h-[50px] items-center rounded-lg bg-white px-2 py-1 text-black">
        <img className="w-8 select-none" src="/icon/search.svg" alt="" />
        <input
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchHandle(searchQuery, allHotelList, setCurrentHotelList);
            }
          }}
          value={searchQuery}
          type="text"
          placeholder="Name / Address"
          className="bg-transparent px-2 outline-none"
        />
      </div>
      <div className="flex items-center space-x-4 rounded-xl bg-white px-1">
        <div className="flex flex-col">
          <label
            htmlFor="departure-date"
            className="select-none text-center text-sm font-medium text-gray-700"
          >
            Check In
          </label>
          <input
            type="date"
            value={checkInDate.toISOString().split('T')[0]}
            onChange={(e) => {
              setCheckInDate(new Date(e.target.value));
            }}
            id="departure-date"
            className="h-[30px] w-fit max-w-40 rounded-lg px-4 py-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="arrival-date"
            className="select-none text-center text-sm font-medium text-gray-700"
          >
            Check Out
          </label>
          <input
            type="date"
            value={checkOutDate.toISOString().split('T')[0]}
            onChange={(e) => {
              setCheckOutDate(new Date(e.target.value));
            }}
            id="arrival-date"
            className="h-[30px] w-fit max-w-40 rounded-lg px-4 py-2 focus:outline-none"
          />
        </div>
      </div>

      <button
        onClick={() => {
          searchHandle(searchQuery, allHotelList, setCurrentHotelList);
        }}
        className="w-fit rounded bg-blue-500 px-6 py-2 text-white"
      >
        Search
      </button>
      {currentUser?.role == 'admin' ? (
        <button
          onClick={() => {
            router.push('/create');
          }}
          className="w-fit rounded bg-yellow-500 px-6 py-2 text-white"
        >
          Add Hotel
        </button>
      ) : null}
    </div>
  );
}
