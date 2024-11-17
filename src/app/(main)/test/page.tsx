'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [bookedHotels, setBookedHotels] = useState([
    {
      id: 1,
      name: 'Hotel name',
      district: 'District',
      startDate: 'StartDate',
      endDate: 'Checkout Date',
    },
    {
      id: 2,
      name: 'Hotel name',
      district: 'District',
      startDate: 'StartDate',
      endDate: 'Checkout Date',
    },
    {
      id: 3,
      name: 'Hotel name',
      district: 'District',
      startDate: 'StartDate',
      endDate: 'Checkout Date',
    },
  ]);

  const hotels = [
    {
      id: 1,
      name: 'HotelName',
      address: 'Address',
      district: 'District',
      province: 'Province',
      isBooked: false,
    },
    {
      id: 2,
      name: 'HotelName',
      address: 'Address',
      district: 'District',
      province: 'Province',
      isBooked: true,
    },
    {
      id: 3,
      name: 'HotelName',
      address: 'Address',
      district: 'District',
      province: 'Province',
      isBooked: false,
    },
  ];

  const handleDelete = (id: number) => {
    setBookedHotels((prev) => prev.filter((hotel) => hotel.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 shadow-md">
        <div className="mb-4 flex items-center space-x-2">
          <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-600">
            <h1 className="text-xl font-bold text-white">JS</h1>
          </div>
          <h2 className="text-lg font-bold">Your Bookings</h2>
        </div>
        <ul className="space-y-4">
          {bookedHotels.map((hotel) => (
            <li key={hotel.id} className="rounded-md border p-3">
              <h3 className="font-bold">{hotel.name}</h3>
              <p className="text-sm">{hotel.district}</p>
              <p className="text-xs">
                {hotel.startDate} - {hotel.endDate}
              </p>
              <div className="mt-2 flex space-x-2">
                <button className="rounded bg-blue-500 px-3 py-1 text-white">Edit</button>
                <button
                  onClick={() => handleDelete(hotel.id)}
                  className="rounded bg-red-500 px-3 py-1 text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Search and Filter Section */}
        <div className="mb-6 flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="flex-1 rounded border px-4 py-2" />
          <input type="date" className="rounded border px-4 py-2" />
          <input type="date" className="rounded border px-4 py-2" />
          <button className="rounded bg-blue-500 px-6 py-2 text-white">Search</button>
        </div>

        {/* Hotel Listings */}
        <div className="grid grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="rounded-md border bg-white p-4 shadow">
              <Image
                src="/hotel.jpg"
                alt="Hotel"
                width={300}
                height={200}
                className="rounded-t-md"
              />
              <div className="p-2">
                <h3 className="text-lg font-bold">{hotel.name}</h3>
                <p className="text-sm text-gray-600">{hotel.address}</p>
                <p className="text-sm text-gray-600">{hotel.district}</p>
                <p className="text-sm text-gray-600">{hotel.province}</p>
                {hotel.isBooked ? (
                  <button className="mt-2 w-full rounded bg-gray-500 py-2 text-white" disabled>
                    Booked
                  </button>
                ) : (
                  <button className="mt-2 w-full rounded bg-green-500 py-2 text-white">Book</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
