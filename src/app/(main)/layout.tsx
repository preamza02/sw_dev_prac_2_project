import type { Metadata } from 'next';
import React from 'react';
import '../globals.css';
import NavBar from '../_components/navbar';
import { AuthProvider } from '@/context/AuthContext';
import SearchBar from './_components/searchBar';

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
      <body>
        <AuthProvider>
          <NavBar></NavBar>
          <div>
            <SearchBar></SearchBar>
            <div className="flex w-full flex-row">
              <div className="w-1/4">555</div>
              <div className="w-3/4 pr-20">{children}</div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
