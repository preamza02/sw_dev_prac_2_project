'use client';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export default function SearchBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex h-[70px] items-center justify-center space-x-4 bg-[#20274D] p-10">
      <div className="flex h-[50px] items-center rounded-lg bg-white px-2 py-1 text-black">
        <img className="w-8" src="/icon/search.svg" alt="" />
        <input type="text" placeholder="Search...." className="bg-transparent px-2 outline-none" />
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

      <button className="w-fit rounded bg-blue-500 px-6 py-2 text-white">Search</button>
      {currentUser?.role == 'admin' ? (
        <button className="w-fit rounded bg-yellow-500 px-6 py-2 text-white">Add Hotel</button>
      ) : null}
    </div>
  );
}
