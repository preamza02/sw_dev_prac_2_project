'use client';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { HotelsContext } from '@/context/HotelContext';
import getHotels from '@/api/hotel/getHospital.api';
import { Hotel } from '@/api/interfaces';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { currentUser } = useContext(AuthContext);
  const { setCurrentHospitalList } = useContext(HotelsContext);

  return (
    <div className="flex h-[70px] items-center justify-center space-x-4 bg-[#20274D] p-10">
      <div className="flex h-[50px] items-center rounded-lg bg-white px-2 py-1 text-black">
        <img className="w-8" src="/icon/search.svg" alt="" />
        <input
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
          type="text"
          placeholder="Search...."
          className="bg-transparent px-2 outline-none"
        />
      </div>
      <div className="flex items-center space-x-4 rounded-xl bg-white px-1">
        <div className="flex flex-col">
          <label htmlFor="departure-date" className="text-center text-sm font-medium text-gray-700">
            Check In
          </label>
          <input
            type="date"
            id="departure-date"
            className="h-[30px] w-fit max-w-40 rounded-lg px-4 py-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="arrival-date" className="text-center text-sm font-medium text-gray-700">
            Check Out
          </label>
          <input
            type="date"
            id="arrival-date"
            className="h-[30px] w-fit max-w-40 rounded-lg px-4 py-2 focus:outline-none"
          />
        </div>
      </div>

      <button
        onClick={() => {
          getHotels().then((data) => {
            if ('message' in data) {
              return;
            }
            const newCurrentHospitalList: Hotel[] = [];
            for (let i = 0; i < data.data.length; i++) {
              if (data.data[i].name.toLowerCase().startsWith(searchQuery.toLowerCase())) {
                newCurrentHospitalList.push(data.data[i]);
              }
            }
            setCurrentHospitalList(newCurrentHospitalList);
          });
        }}
        className="w-fit rounded bg-blue-500 px-6 py-2 text-white"
      >
        Search
      </button>
      {currentUser?.role == 'admin' ? (
        <button className="w-fit rounded bg-yellow-500 px-6 py-2 text-white">Add Hotel</button>
      ) : null}
    </div>
  );
}
