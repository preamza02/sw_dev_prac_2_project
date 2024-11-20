import type { Metadata } from 'next';
import React from 'react';
import '../globals.css';
import NavBar from '../_components/navbar';
import { AuthProvider } from '@/context/AuthContext';
import { HotelsProvider } from '@/context/HotelContext';
import SearchBar from './_components/searchBar';
import Line from '../_components/line';
import BookingSection from './_components/bookingSection';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen max-h-screen">
        <AuthProvider>
          <HotelsProvider>
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <div style={{ height: 'calc(100vh - 140px)' }} className="flex w-full flex-row">
              <div className="w-1/4 pr-4">
                <BookingSection />
              </div>
              <Line />
              <div className="scrollbar-custom flex w-full flex-col overflow-y-scroll pl-8">
                {children}
              </div>
            </div>
          </HotelsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
